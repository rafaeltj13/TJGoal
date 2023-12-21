<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle title="Artilharia Geral" />
    <div class="flex items-center justify-between mb-2 px-5">
      <p class="text-primary dark:text-primary-dark text-lg">Jogador</p>
      <p class="text-primary dark:text-primary-dark text-lg">Gols</p>
    </div>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-[800px] rounded-full bg-primary dark:bg-primary-dark mb-2"
      ></div>
    </div>
    <div
      class="bg-background dark:bg-background-dark flex items-center justify-between p-2 hover:scale-105 transition-transform cursor-pointer dark:border-primary-dark"
      v-for="(currentUser, index) of currentRanking"
      :key="currentUser.id"
      @click="() => navigateTo(`profile/${currentUser.id}`)"
    >
      <div class="flex items-center">
        <p class="text-lg text-primary dark:text-primary-dark w-10">
          {{ index + 1 }} -
        </p>
        <LevelIcon :current-level="currentUser.level?.id || 1" class="mr-4" />
        <TeamLogo :logo="currentUser.team?.logo || ''" />
        <p class="text-text dark:text-text-dark ml-3">
          {{ currentUser.username }}
        </p>
      </div>
      <p class="text-text dark:text-text-dark">
        {{ currentUser.goals }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "registered",
});

import type { User } from "~/lib/data.types";

useDefaultHead("TJGoal - Artilharia");

const { data, pending } = await useFetch(`/api/user/ranking`);
const currentRanking = computed<Array<User>>(() => data.value as User[]);
</script>
