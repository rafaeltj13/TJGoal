<template>
  <div class="flex items-center justify-between w-full">
    <div class="flex items-center">
      <div
        class="rounded-xl bg-gray-300 border-primary dark:border-primary-dark border-2 w-10 h-10 flex items-center justify-center mr-2"
      >
        <TheIcon
          customClass="text-slate-400 text-2xl"
          :faIcon="`fa-solid fa-${getLevel()}`"
        />
      </div>
      <TeamTag
        :color-primary="getRandomColor()"
        :color-secondary="getRandomColor()"
        :color-tertiary="getRandomColor()"
      />
      <p class="ml-2 text-tertiary dark:text-tertiary-dark">LilTJ</p>
    </div>
    <p class="text-tertiary dark:text-tertiary-dark">
      {{ Math.floor(Math.random() * 20) }}
    </p>
  </div>
</template>

<script setup lang="ts">
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
