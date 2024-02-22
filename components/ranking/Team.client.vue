<template>
  <div
    class="w-96 bg-background border-background dark:bg-background-dark shadow-xl border-2 dark:border-primary-dark rounded-xl p-4"
  >
    <div>
      <div class="flex items-center justify-between p-2">
        <h1
          class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
        >
          {{ $t("ranking.scorer") }}
        </h1>
      </div>
      <RankingListItem
        v-for="(item, index) of props.currentRanking"
        :item="item"
        :key="item.userid"
        class="py-2"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayerScoreDetails } from "~/lib/data.types";

const props = defineProps({
  currentRanking: {
    type: Array as PropType<PlayerScoreDetails[]>,
    required: true,
  },
});
</script>
