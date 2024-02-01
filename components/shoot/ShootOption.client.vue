<template>
  <div
    v-if="!openRightSidebar"
    class="flex items-center justify-between py-1"
    @click="tryToShoot()"
  >
    <div
      :class="{
        'shadow-[0px_0px_12px_4px] !shadow-primary dark:shadow-primary-dark':
          shoot,
      }"
      class="flex items-center justify-center h-12 w-12 my-2 mx-auto bg-background hover:bg-primary dark:bg-background-dark dark:hover:bg-primary-dark text-primary dark:text-primary-dark hover:text-background dark:hover:text-background-dark hover:rounded-3xl rounded-xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group"
    >
      <p v-if="!shoot" class="text-sm">{{ formattedTimeLeft }}</p>
      <TheIcon
        v-else
        customClass="animate-bounce text-primary dark:text-primary-dark group-hover:text-background dark:group-hover:text-background-dark cursor-pointer"
        faIcon="fa-solid fa-futbol"
      />
      <span
        class="absolute w-auto p-2 m-2 min-w-max right-14 rounded-xl text-background dark:text-background-dark dark:bg-primary-dark bg-primary text-xs font-bold transition-all duration-100 scale-0 origin-right group-hover:scale-100"
      >
        {{ title }}
      </span>
    </div>
  </div>
  <div v-else class="flex items-center justify-between py-1">
    <span class="text-primary dark:text-primary-dark text-xs font-bold">
      {{ title }}
    </span>
    <div
      :class="{
        'shadow-[0px_0px_12px_4px] !shadow-primary dark:shadow-primary-dark':
          shoot,
      }"
      @click="tryToShoot()"
      class="flex items-center justify-center h-12 w-12 my-2 bg-background hover:bg-primary dark:bg-background-dark dark:hover:bg-primary-dark text-primary dark:text-primary-dark hover:text-background dark:hover:text-background-dark hover:rounded-3xl rounded-xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group"
    >
      <p v-if="!shoot" class="text-sm">{{ formattedTimeLeft }}</p>
      <TheIcon
        v-else
        customClass="animate-bounce text-primary dark:text-primary-dark group-hover:text-background dark:group-hover:text-background-dark cursor-pointer"
        faIcon="fa-solid fa-futbol"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const emit = defineEmits(["shoot"]);
const props = defineProps({
  type: {
    type: String as PropType<
      "default" | "penalty" | "freeKick" | "counterAttack"
    >,
    required: true,
  },
});

const openRightSidebar = useRightSidebar();

const shoot = ref(false);
const title = computed(() => {
  switch (props.type) {
    case "penalty":
      return t("rightSidebar.penalty");
    case "freeKick":
      return t("rightSidebar.freeKick");
    case "counterAttack":
      return t("rightSidebar.counterAttack");
    default:
      return t("rightSidebar.shoot");
  }
});

const TIME_LIMIT = 2;
const timePassed = ref(0);
const timerInterval: Ref<ReturnType<typeof setInterval> | undefined> =
  ref(undefined);

const timeLeft = computed(() => TIME_LIMIT - timePassed.value);

const formattedTimeLeft = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  let secondsString = `${seconds}`;

  if (seconds < 10) {
    secondsString = `0${seconds}`;
  }

  return `${minutes}:${secondsString}`;
});

const onTimesUp = () => {
  shoot.value = true;
  clearInterval(timerInterval.value);
  timerInterval.value = undefined;
};

const startTimer = () => {
  timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
  nextTick();
};

const tryToShoot = () => {
  if (!shoot.value) return;

  emit("shoot", props.type);
  shoot.value = false;
  timePassed.value = 0;
  startTimer();
};

watch(
  () => timeLeft.value,
  (newValue) => {
    if (newValue === 0) {
      onTimesUp();
    }
  }
);

onMounted(() => {
  startTimer();
});
</script>
