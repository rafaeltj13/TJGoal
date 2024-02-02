<template>
  <div class="h-[68px] pt-6 flex items-center justify-center">
    <div v-if="!tryToShoot" class="w-full flex items-center justify-between">
      <TheButton :content="$t('shoot.left')" @click="shoot('left')" />
      <TheButton :content="$t('shoot.center')" @click="shoot('center')" />
      <TheButton :content="$t('shoot.right')" @click="shoot('right')" />
    </div>
    <div v-else class="relative w-full">
      <TheIcon
        :class="{
          'left-0': keeperJump === 'left',
          'right-1/2 left-1/2': keeperJump === 'center',
          'right-0': keeperJump === 'right',
        }"
        class="absolute transition-all -top-[10px]"
        customClass="text-accent dark:text-accent-dark text-xl"
        faIcon="fa-solid fa-mitten"
      />
      <TheLoadingSpinner
        :class="{
          'left-5': shootDirection === 'left',
          'right-1/2': shootDirection === 'center',
          'right-5': shootDirection === 'right',
        }"
        class="absolute -top-[9px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Direction = "left" | "center" | "right";

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

const shootDirection = ref<Direction>("center");
const keeperJump = ref<Direction>("center");
const options: Direction[] = ["left", "center", "right"];

const shoot = (direction: Direction) => {
  tryToShoot.value = true;

  shootDirection.value = direction;
  keeperJump.value = options[Math.floor(Math.random() * options.length)];

  setTimeout(() => {
    if (keeperJump.value === direction) {
      emit("miss");
      tryToShoot.value = false;
      return;
    }

    successPercentage.value =
      (0.5 +
        (props.shooting / 1000) * 2 +
        props.pace / 1000 +
        props.physical / 1000) *
      100;

    if (successPercentage.value > 100) successPercentage.value = 100;

    shootPercentage.value = Math.random() * 100;

    setTimeout(() => {
      if (shootPercentage.value >= 100 - successPercentage.value) emit("goal");
      else emit("miss");
      tryToShoot.value = false;
    }, 1000);
  }, 1000);
};
</script>
