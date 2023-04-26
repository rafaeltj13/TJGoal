<template>
  <font-awesome-icon :class="props.customClass" :icon="props.faIcon" />
</template>

<script setup lang="ts">
const props = defineProps({
  faIcon: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    required: true,
  },
});
</script>
