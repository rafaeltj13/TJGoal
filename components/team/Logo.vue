<template>
  <img
    class="w-10 h-10 rounded-lg"
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
