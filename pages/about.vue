<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle title="Sobre" />
  </div>
</template>

<script setup lang="ts">
useDefaultHead("TJGoal - Sobre");
definePageMeta({
  middleware: "registration",
});
</script>
