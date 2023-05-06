<template>
  <div class="flex items-center justify-between w-full">
    <div class="flex items-center">
      <div
        class="rounded-xl bg-gray-300 w-10 h-10 flex items-center justify-center mr-2"
      >
        <TheIcon
          customClass="text-slate-400 text-2xl"
          :faIcon="`fa-solid fa-${getLevel()}`"
        />
      </div>
      <img class="w-8 h-8" :src="props.user.team.logo" alt="enemy-logo" />
      <p class="ml-2 text-tertiary dark:text-tertiary-dark">
        {{ props.user.username }}
      </p>
    </div>
    <p class="text-tertiary dark:text-tertiary-dark">
      {{ props.user.goals }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      name: "",
      goals: 0,
    }),
  },
});
const getLevel = () => {
  const levels = [
    "viruses",
    "medal",
    "mars-double",
    "venus-double",
    "dna",
    "star",
    "hippo",
    "bolt",
  ];
  return levels[Math.floor(Math.random() * levels.length)];
};

const getRandomColor = () => {
  const levels = [
    "black",
    "white",
    "amber-700",
    "lime-700",
    "slate-700",
    "teal-700",
    "fuchsia-700",
    "violet-700",
  ];
  return levels[Math.floor(Math.random() * levels.length)];
};
</script>
