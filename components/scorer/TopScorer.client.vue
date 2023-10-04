<template>
  <div
    class="w-96 bg-background border-background dark:bg-background-dark shadow-xl border-2 dark:border-primary-dark rounded-xl p-4"
  >
    <div>
      <h1
        class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
      >
        Hora
      </h1>
      <div v-if="pending">
        <ScorerListItemLoading
          v-for="e of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="e"
        />
      </div>
      <ScorerListItem
        v-else-if="data"
        v-for="(item, index) of currentRanking"
        :item="item"
        :key="item.userId"
        class="py-2"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HourlyItem } from "~/lib/data.types";

const { data, pending } = await useFetch(`/api/goal/hourly`);
console.log({ data: data.value });
const currentRanking = computed<Array<HourlyItem>>(
  () => data.value as HourlyItem[]
);
</script>
