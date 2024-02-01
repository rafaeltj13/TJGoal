<template>
  <div class="h-[68px] pt-6 flex items-center justify-center">
    <div v-if="!tryToShoot" class="w-full flex items-center justify-between">
      <TheButton :content="$t('shoot.left')" @click="shoot" />
      <TheButton :content="$t('shoot.center')" @click="shoot" />
      <TheButton :content="$t('shoot.right')" @click="shoot" />
    </div>
    <div v-else>
      <TheLoadingSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  shooting: {
    type: Number,
    required: true,
  },
  pace: {
    type: Number,
    required: true,
  },
  physical: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["goal", "miss"]);

const tryToShoot = ref(false);
const shootPercentage = ref(0);
const successPercentage = ref(0);

const shoot = () => {
  tryToShoot.value = true;
  successPercentage.value =
    (0.33 +
      (props.shooting / 1000) * 2 +
      props.pace / 1000 +
      props.physical / 1000) *
    100;

  if (successPercentage.value > 100) successPercentage.value = 100;

  setTimeout(() => {
    shootPercentage.value = Math.random() * 100;

    setTimeout(() => {
      if (shootPercentage.value >= 100 - successPercentage.value) emit("goal");
      else emit("miss");
      tryToShoot.value = false;
    }, 2000);
  }, 500);
};
</script>
