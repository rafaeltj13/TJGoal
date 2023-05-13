<template>
  <div class="bg-background dark:bg-background-dark h-[100vh] px-8">
    <h1 class="pt-4 text-text dark:text-text-dark">
      Welcome to the ranking page
    </h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "PBGol - Ranking",
});
definePageMeta({
  middleware: "registration",
});
</script>
