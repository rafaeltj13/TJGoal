<template>
  <div
    @click="() => navigateTo(`profile/${item.userid}`)"
    class="flex items-center justify-between w-full h-[50px] hover:scale-105 transition-transform cursor-pointer"
  >
    <div class="flex items-center">
      <p class="text-md text-primary dark:text-primary-dark w-10 font-bold">
        {{ props.position }} -
      </p>
      <LevelIcon
        :current-level="props.item.level"
        :vip-type="props.item.viptype"
        class="mr-2"
      />
      <TeamLogo :logo="props.item?.logo" />
      <p class="ml-2 text-tertiary dark:text-tertiary-dark font-bold">
        {{ props.item.username }}
      </p>
    </div>
    <p class="text-tertiary dark:text-tertiary-dark font-bold">
      {{ props.item.goalcount }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PlayerScoreDetails } from "~/lib/data.types";

const props = defineProps({
  item: {
    type: Object as PropType<PlayerScoreDetails>,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
</script>
