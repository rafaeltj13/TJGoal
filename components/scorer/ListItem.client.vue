<template>
  <div
    class="flex items-center justify-between w-full hover:scale-105 transition-transform cursor-pointer"
  >
    <div class="flex items-center">
      <p class="text-lg text-primary dark:text-primary-dark w-10">
        {{ props.position }} -
      </p>
      <LevelIcon :icon="props.item.icon" class="mr-2" />
      <img class="w-8 h-8" :src="props.item.logo" alt="enemy-logo" />
      <p class="ml-2 text-text dark:text-text-dark">
        {{ props.item.username }}
      </p>
    </div>
    <p class="text-text dark:text-text-dark">
      {{ props.item.goalcount }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { HourlyItem } from "~/lib/data.types";

const props = defineProps({
  item: {
    type: Object as PropType<HourlyItem>,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
</script>
