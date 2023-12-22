<template>
  <div
    class="w-96 bg-background border-background dark:bg-background-dark shadow-xl border-2 dark:border-primary-dark rounded-xl p-4"
  >
    <div>
      <div class="flex items-center justify-between p-2">
        <h1
          class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
        >
          Time
        </h1>
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer text-lg"
          faIcon="fa-solid fa-rotate"
          @click="fetchCurrentRanking"
        />
      </div>
      <div v-if="isLoading">
        <TeamListItemLoading
          v-for="e of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="e"
        />
      </div>
      <TeamListItem
        v-else-if="currentRanking"
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
import type { Team } from "~/lib/data.types";

const currentRanking = ref<Array<Team>>([]);
const isLoading = ref(false);

const fetchCurrentRanking = async () => {
  isLoading.value = true;
  const { data } = await useFetch("/api/team/ranking");
  currentRanking.value = data.value as Team[];
  isLoading.value = false;
};

fetchCurrentRanking();

setInterval(() => {
  fetchCurrentRanking();
}, 60000);
</script>
