<template>
  <div
    @click="() => navigateTo(`team/${team.id}`)"
    class="flex items-center justify-between w-full h-[50px] hover:scale-105 transition-transform cursor-pointer"
  >
    <div class="flex items-center">
      <p class="text-mg text-primary dark:text-primary-dark w-10 font-bold">
        {{ props.position }} -
      </p>
      <TeamLogo :logo="props.team?.logo" />
      <p class="ml-2 text-text dark:text-text-dark font-bold">
        {{ props.team.name }}
      </p>
    </div>
    <p class="text-text dark:text-text-dark font-bold">
      {{ props.team.team_goals }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Team } from "~/lib/data.types";

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
