<template>
  <div
    class="w-48 h-48 cursor-pointer bg-background border-background dark:bg-background-dark shadow-lg hover:scale-125 hover:shadow-2xl transition-all border-2 dark:border-primary-dark rounded-xl p-4 flex flex-col items-center justify-center"
  >
    <TheIcon
      customClass="text-green-600 text-[58px] mb-4"
      :faIcon="props.icon"
    />
    <p class="text-center text-primary dark:text-primary-dark text-xl">
      {{ props.description }}
    </p>
    <p class="mt-2 text-center text-secondary dark:text-secondary-dark text-md">
      {{ props.price }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>
