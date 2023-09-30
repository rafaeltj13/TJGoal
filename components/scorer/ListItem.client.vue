<template>
  <div
    class="flex items-center justify-between w-full hover:scale-105 transition-transform cursor-pointer"
  >
    <div class="flex items-center">
      <p class="text-lg text-primary dark:text-primary-dark w-10">
        {{ props.position }} -
      </p>
      <LevelIcon :icon="props.user.level.icon" class="mr-2" />
      <img
        class="w-8 h-8"
        :src="props.user.team?.logo || ''"
        alt="enemy-logo"
      />
      <p class="ml-2 text-text dark:text-text-dark">
        {{ props.user.username }}
      </p>
    </div>
    <p class="text-text dark:text-text-dark">
      {{ props.user.goals }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object,
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
