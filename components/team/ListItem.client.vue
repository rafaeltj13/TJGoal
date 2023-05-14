<template>
  <div class="flex items-center justify-between w-full h-[56px] cursor-pointer">
    <div class="flex items-center">
      <p class="mr-2 text-lg text-primary dark:text-primary-dark w-8">
        {{ props.position }} -
      </p>
      <img class="w-8 h-8" :src="props.team?.logo || ''" alt="enemy-logo" />
      <p class="ml-2 text-text dark:text-text-dark">
        {{ props.team.name }}
      </p>
    </div>
    <p class="text-text dark:text-text-dark">
      {{ props.team.team_goals }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Team } from "~/lib/data.types";

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    default: () => ({
      name: "",
      goals: 0,
    }),
  },
  position: {
    type: Number,
    required: true,
  },
});
</script>
