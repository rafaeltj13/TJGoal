<template>
  <img
    class="w-8 h-8 rounded-lg"
    :src="`/emblems/${props.logo}.png`"
    :alt="`${$props.logo}-team-logo`"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
});
</script>
