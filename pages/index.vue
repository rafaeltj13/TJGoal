<template>
  <div class="p-8 max-w-[1366px] mx-auto min-h-[100vh]">
    <ThePageTitle title="1ª Rodada - 1ª Temporada" />
    <ScorerCardList />
  </div>
</template>

<script setup lang="ts">
useDefaultHead("TJGoal");
definePageMeta({
  middleware: "registered",
});
</script>
