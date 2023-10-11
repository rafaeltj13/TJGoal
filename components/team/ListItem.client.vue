<template>
  <div
    class="flex items-center justify-between w-full h-[56px] hover:scale-105 transition-transform cursor-pointer"
  >
    <div class="flex items-center">
      <p class="text-lg text-primary dark:text-primary-dark w-10">
        {{ props.position }} -
      </p>
      <TeamLogo :logo="props.team?.logo" />
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
