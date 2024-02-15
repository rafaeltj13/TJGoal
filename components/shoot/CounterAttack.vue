<template>
  <div class="h-[68px] pt-6 flex items-center justify-center">
    <div v-if="isAttacking || isDefending" class="w-full">
      <Transition mode="out-in" name="fade">
        <div
          v-if="isDefending"
          class="w-full flex items-center justify-between"
        >
          <TheButton
            :content="$t('shoot.slideTackle')"
            @click="defense('slideTackle')"
          />
          <TheButton :content="$t('shoot.tackle')" @click="defense('tackle')" />
          <TheButton
            :content="$t('shoot.interception')"
            @click="defense('interception')"
          />
        </div>
        <div
          v-else-if="!isDefending && isAttacking"
          class="w-full flex items-center justify-between"
        >
          <TheButton
            :content="$t('shoot.individual')"
            @click="shoot('individual')"
          />
          <TheButton :content="$t('shoot.pass')" @click="shoot('pass')" />
          <TheButton
            :content="$t('shoot.longPass')"
            @click="shoot('longPass')"
          />
        </div>
      </Transition>
    </div>
    <div
      v-if="tryToShoot"
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
type DefenseOption = "tackle" | "slideTackle" | "interception";
type ShootOption = "individual" | "pass" | "longPass";

const props = defineProps({
  shooting: {
    type: Number,
    required: true,
  },
  passing: {
    type: Number,
    required: true,
  },
  defending: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["goal", "miss"]);

const tryToShoot = ref(false);
const shootPercentage = ref(0);
const successPercentage = ref(0);

const isDefending = ref(true);
const isAttacking = ref(false);

const shootOptions: ShootOption[] = ["individual", "pass", "longPass"];
const defenseOptions: DefenseOption[] = [
  "tackle",
  "slideTackle",
  "interception",
];

const defense = (option: DefenseOption) => {
  const correctDefending =
    defenseOptions[Math.floor(Math.random() * defenseOptions.length)];

  if (correctDefending === option) {
    emit("miss");
    tryToShoot.value = false;
    isDefending.value = true;
    return;
  }

  isDefending.value = false;
  isAttacking.value = true;
};

const shoot = (shootOption: ShootOption) => {
  const correctShootOption =
    shootOptions[Math.floor(Math.random() * shootOptions.length)];

  if (shootOption !== correctShootOption) {
    emit("miss");
    tryToShoot.value = false;
    return;
  }

  tryToShoot.value = true;
  isAttacking.value = false;

  successPercentage.value =
    (0.5 +
      (props.shooting / 1000) * 2 +
      props.passing / 1000 +
      props.defending / 1000) *
    100;

  if (successPercentage.value > 100) successPercentage.value = 100;
  setTimeout(() => {
    shootPercentage.value = Math.random() * 100;
    setTimeout(() => {
      if (shootPercentage.value >= 100 - successPercentage.value) emit("goal");
      else emit("miss");
      tryToShoot.value = false;
    }, 1000);
  }, 500);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
