<template>
  <div
    class="rounded-xl bg-gray-300 w-10 h-10 flex items-center justify-center"
    :class="{
      'shadow-[0px_0px_10px_0px] shadow-primary': Math.random() >= 0.5,
    }"
  >
    <TheIcon custom-class="text-slate-400 text-2xl" :fa-icon="props.icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
