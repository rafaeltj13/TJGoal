<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle title="Classificação" />
    <div class="flex items-center justify-between mb-2 px-5">
      <p class="text-primary dark:text-primary-dark text-lg">Time</p>
      <p class="text-primary dark:text-primary-dark text-lg">Gols</p>
    </div>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-[800px] rounded-full bg-primary dark:bg-primary-dark mb-2"
      ></div>
    </div>
    <div v-for="(team, index) of currentRanking" :team="team" :key="team.id">
      <div
        class="p-2 flex items-center justify-between w-full h-[56px] cursor-pointer hover:scale-105 transition-transform bg-background dark:bg-background-dark"
        :class="{
          'rounded-t-xl': index === 0,
          'rounded-b-xl': index + 1 === currentRanking.length,
        }"
      >
        <div class="flex items-center">
          <div
            class="h-8 w-2 mr-2 rounded-full"
            :class="{
              'bg-indigo-200 dark:bg-indigo-400': index < 4,
              'bg-rose-200 dark:bg-rose-400': index > currentRanking.length - 5,
            }"
          ></div>
          <p class="text-lg text-primary dark:text-primary-dark w-10">
            {{ index + 1 }} -
          </p>
          <TeamLogo :logo="team.logo" />
          <p class="ml-2 text-primary dark:text-primary-dark">
            {{ team.name }}
          </p>
        </div>
        <p class="text-primary dark:text-primary-dark">
          {{ team.team_goals }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Team } from "~/lib/data.types";

useDefaultHead("TJGoal - Classifição");

const { data, pending } = await useFetch("/api/team/ranking");
const currentRanking = computed<Array<Team>>(() => data.value as Team[]);
</script>
