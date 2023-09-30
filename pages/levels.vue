<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle title="Niveis" />
    <div class="flex items-center justify-between mb-2 px-5">
      <p class="text-primary dark:text-primary-dark text-lg">Nível</p>
      <p class="text-primary dark:text-primary-dark text-lg">Gols</p>
    </div>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-[800px] rounded-full bg-primary dark:bg-primary-dark mb-2"
      ></div>
    </div>
    <div
      class="flex items-center justify-between p-2"
      v-for="currentLevel of levels"
      :key="currentLevel.id"
    >
      <div class="flex items-center">
        <LevelIcon :icon="currentLevel.icon" class="mr-4" />
        <p class="text-text dark:text-text-dark">
          {{ currentLevel.name }}
        </p>
      </div>
      <p class="text-text dark:text-text-dark">
        {{ currentLevel.min_goals }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useDefaultHead("TJGoal - Níveis");
definePageMeta({
  middleware: "registration",
});

import { Level } from "~/lib/data.types";
const { data } = await useFetch(`/api/level/levels`);
const levels: Ref<Array<Level>> = ref(data.value as Level[]);
</script>
