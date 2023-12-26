<template>
  <div
    class="rounded-xl bg-gray-300 w-8 h-8 flex items-center justify-center"
    :class="{
      'shadow-[0px_0px_10px_0px] shadow-primary': Math.random() >= 0.9,
    }"
  >
    <img
      class="w-8 h-8 rounded-lg"
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
</script>
