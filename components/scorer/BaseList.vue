<template>
  <div
    class="w-96 bg-secondary dark:bg-secondary-dark shadow-2xl rounded-xl p-4"
  >
    <div>
      <h1
        class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
      >
        Artilharia
      </h1>
      <ScorerListItem v-for="e of array" :key="e" class="py-2" />
    </div>
  </div>
</template>
<script setup lang="ts">
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
</script>
