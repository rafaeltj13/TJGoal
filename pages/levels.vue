<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle :title="$t('levels.title')" />
    <div class="flex items-center justify-between mb-2 px-5">
      <p class="text-primary dark:text-primary-dark text-lg">
        {{ $t("levels.level") }}
      </p>
      <p class="text-primary dark:text-primary-dark text-lg">
        {{ $t("levels.goals") }}
      </p>
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
        <LevelIcon :current-level="currentLevel.id" class="mr-4" />
        <p class="text-text dark:text-text-dark font-bold">
          {{ currentLevel.name }}
        </p>
      </div>
      <p class="text-text dark:text-text-dark font-bold">
        {{ currentLevel.min_goals }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "registered",
});

import type { Level } from "~/lib/data.types";

useDefaultHead("TJGoal - Níveis");

const { data } = await useFetch(`/api/level/levels`);
const levels: Ref<Array<Level>> = ref(data.value as Level[]);
</script>
