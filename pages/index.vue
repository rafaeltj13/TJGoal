<template>
  <div class="overflow-y-auto p-8 max-w-[1366px] mx-auto min-h-[100vh]">
    <h1 class="text-center text-4xl text-primary dark:text-primary-dark mb-2">
      Rodada 1 - Temporada 1
    </h1>
    <div class="flex justify-center">
      <div
        class="h-1 w-80 rounded-full bg-primary dark:bg-primary-dark mb-20"
      ></div>
    </div>
    <ScorerCardList />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "PBGol - Home",
});
</script>
