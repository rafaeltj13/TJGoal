<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-fit">
      <h1
        class="text-center text-4xl text-primary dark:text-primary-dark mb-2 font-bold"
      >
        {{ props.title }}
      </h1>
      <div class="flex justify-center">
        <div
          class="h-0.5 w-[80%] rounded-full bg-primary dark:bg-primary-dark mb-12"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title"]);
</script>
