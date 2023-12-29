<template>
  <div class="relative">
    <div
      class="rounded-xl bg-gray-300 w-8 h-8 flex items-center justify-center animate-pulse"
      :class="{
        'shadow-[0px_0px_14px_0px] shadow-orange-800': a > 0.75,
        'shadow-[0px_0px_14px_0px] shadow-indigo-800': a < 0.25,
        'shadow-[0px_0px_14px_0px] shadow-emerald-800': a >= 0.25 && a <= 0.5,
      }"
    ></div>
    <img
      class="w-8 h-8 rounded-lg absolute top-0 left-0"
      :src="`/levels/${props.currentLevel}.png`"
      :alt="`${$props.currentLevel}-level-icon`"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentLevel: {
    type: [Number, String],
    required: true,
  },
});

const a = Math.random();
</script>
