<template>
  <div class="h-[128px] pt-6 flex items-center justify-center">
    <div
      v-if="!tryToShoot"
      class="w-full flex items-center justify-between h-full flex-wrap gap-5"
    >
      <TheButton
        :content="$t('shoot.perfectPlaced')"
        @click="shoot('perfectPlaced')"
      />
      <TheButton :content="$t('shoot.setPiece')" @click="shoot('setPiece')" />
      <TheButton :content="$t('shoot.power')" @click="shoot('power')" />
      <TheButton :content="$t('shoot.backFoot')" @click="shoot('backFoot')" />
    </div>
    <div
      v-else
      class="h-4 my-auto w-full rounded-md bg-sidebar dark:bg-sidebar-dark relative"
    >
      <div
        :style="`width: ${shootPercentage}%`"
        class="h-full bg-tertiary dark:bg-tertiary-dark rounded-md transition-all"
      ></div>
      <div
        :style="`width: ${successPercentage}%`"
        class="h-full bg-primary dark:bg-primary-dark rounded-md absolute opacity-50 top-0 right-0"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Option = "perfectPlaced" | "setPiece" | "power" | "backFoot";
const options: Option[] = ["perfectPlaced", "setPiece", "power", "backFoot"];

const props = defineProps({
  shooting: {
    type: Number,
    required: true,
  },
  passing: {
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

const shoot = (option: Option) => {
  tryToShoot.value = true;

  const wrongOption = options[Math.floor(Math.random() * options.length)];

  if (option === wrongOption) {
    emit("miss");
    tryToShoot.value = false;
    return;
  }
  successPercentage.value =
    (0.2 +
      (props.shooting / 1000) * 2.5 +
      (props.passing / 1000) * 1.25 +
      (props.dribbling / 1000) * 1.25) *
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
