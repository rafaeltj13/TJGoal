<template>
  <div
    class="w-96 bg-background border-background dark:bg-background-dark shadow-xl border-2 dark:border-primary-dark rounded-xl p-4"
  >
    <div>
      <h1
        class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
      >
        Times
      </h1>
      <TeamListItem
        v-for="(team, index) of currentRanking"
        :team="team"
        :key="team.id"
        class="py-2"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Team } from "~/lib/data.types";

const { data } = await useFetch("/api/team/ranking");
const currentRanking = computed<Array<Team>>(() => data.value as Team[]);
</script>
