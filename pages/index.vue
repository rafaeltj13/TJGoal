<template>
  <div class="p-8 max-w-[1366px] mx-auto min-h-[100vh]">
    <h1
      class="text-center text-4xl text-primary dark:text-primary-dark mb-2 font-bold"
    >
      Rodada 1 - Temporada 1
    </h1>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-80 rounded-full bg-primary dark:bg-primary-dark mb-20"
      ></div>
    </div>
    <ScorerCardList />
  </div>
</template>

<script setup lang="ts">
useDefaultHead("PBGol");
definePageMeta({
  middleware: "registration",
});
</script>
