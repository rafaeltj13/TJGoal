<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <h1
      class="text-center text-4xl text-primary dark:text-primary-dark mb-2 font-bold"
    >
      Niveis
    </h1>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-20 rounded-full bg-primary dark:bg-primary-dark mb-20"
      ></div>
    </div>
    <div class="flex items-center justify-between mb-2 px-5">
      <p class="text-primary dark:text-primary-dark text-lg">Nível</p>
      <p class="text-primary dark:text-primary-dark text-lg">Gols</p>
    </div>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-[800px] rounded-full bg-primary dark:bg-primary-dark mb-8"
      ></div>
    </div>
    <div>
      <div
        class="flex items-center justify-between mb-4"
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
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "PBGol - Níveis",
});
definePageMeta({
  middleware: "registration",
});

import { Level } from "~/lib/data.types";
const { getLevels } = useAPI();

const levels: Ref<Array<Level>> = ref(await getLevels());
</script>
