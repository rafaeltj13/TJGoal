<template>
  <div
    :class="`w-10 h-10 bg-gradient-to-r from-${props.colorPrimary} via-${props.colorSecondary} to-${props.colorTertiary} flex rounded-xl shadow-xl border-2 border-primary dark:border-primary-dark`"
  >
    <!-- <div :class="`w-4 h-10 rounded-l-full bg-${props.colorPrimary}`"></div>
    <div :class="`w-2 h-10 bg-${props.colorSecondary}`"></div>
    <div :class="`w-4 h-10 rounded-r-full bg-${props.colorTertiary}`"></div> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  colorPrimary: {
    type: String,
    required: true,
  },
  colorSecondary: {
    type: String,
    required: true,
  },
  colorTertiary: {
    type: String,
    required: true,
  },
});
</script>
