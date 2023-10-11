<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle title="Artilharia Geral" />
    <div
      class="bg-background dark:bg-background-dark flex items-center justify-between p-2 hover:scale-105 transition-transform cursor-pointer dark:border-primary-dark"
      v-for="(currentUser, index) of currentRanking"
      :key="currentUser.id"
    >
      <div class="flex items-center">
        <p class="text-lg text-primary dark:text-primary-dark w-10">
          {{ index + 1 }} -
        </p>
        <LevelIcon :icon="currentUser.level?.icon" class="mr-4" />
        <TeamLogo :logo="currentUser.team.logo" />
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
useDefaultHead("TJGoal - Artilharia");
definePageMeta({
  middleware: "registration",
});

import { User } from "~/lib/data.types";

const { data, pending } = await useFetch(`/api/user/ranking`);
const currentRanking = computed<Array<User>>(() => data.value as User[]);
</script>
