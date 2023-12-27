<template>
  <div class="p-8 max-w-[1024px] mx-auto min-h-[100vh]">
    <ThePageTitle title="TJ-Goal" />
    <RankingCardList />
  </div>
</template>

<script setup lang="ts">
useDefaultHead("TJGoal");
definePageMeta({
  middleware: "registered",
});
</script>
