<template>
  <div v-if="!tryToShoot" class="w-full flex items-center justify-center pt-6">
    <TheButton :content="$t('shoot.shoot')" @click="shoot" />
  </div>
  <div
    v-else
    class="h-4 w-full rounded-md bg-sidebar dark:bg-sidebar-dark relative mt-6"
  >
    <div
      :style="`width: ${shootPercentage}%`"
      class="h-full bg-tertiary dark:bg-tertiary-dark rounded-md transition-all ease-in-out"
    ></div>
    <div
      :style="`width: ${successPercentage}%`"
      class="h-full bg-primary dark:bg-primary-dark rounded-md absolute opacity-50 top-0 right-0"
    ></div>
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
  dribbling: {
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
    (Math.random() +
      props.dribbling / 1000 +
      props.pace / 1000 +
      props.dribbling / 1000) *
    100;

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
