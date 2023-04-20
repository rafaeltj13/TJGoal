<template>
  <div v-if="!openRightSidebar" class="flex items-center justify-between">
    <div
      class="flex items-center justify-center h-12 w-12 my-2 mx-auto bg-secondary hover:bg-primary dark:bg-secondary-dark dark:hover:bg-primary-dark text-primary dark:text-primary-dark hover:text-white hover:rounded-3xl rounded-xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group"
    >
      <font-awesome-icon
        v-if="Math.random() > 0.5"
        class="text-primary dark:text-primary-dark group-hover:text-secondary dark:group-hover:text-secondary-dark cursor-pointer"
        icon="fa-solid fa-futbol"
      />
      <p class="text-sm" v-else>3:42</p>
      <span
        class="absolute w-auto p-2 m-2 min-w-max right-14 rounded-md shadow-md text-secondary dark:text-secondary-dark dark:bg-primary-dark bg-primary text-xs font-bold transition-all duration-100 scale-0 origin-right group-hover:scale-100"
      >
        {{ props.title }}
      </span>
    </div>
  </div>
  <div v-else class="flex items-center justify-between">
    <span
      class="w-auto p-2 m-2 min-w-max text-primary dark:text-primary-dark text-xs font-bold"
    >
      {{ props.title }}
    </span>
    <div
      class="flex items-center justify-center h-12 w-12 my-2 bg-secondary hover:bg-primary dark:bg-secondary-dark dark:hover:bg-primary-dark text-primary dark:text-primary-dark hover:text-secondary dark:hover:text-secondary-dark hover:rounded-3xl rounded-xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group"
    >
      <font-awesome-icon
        v-if="Math.random() > 0.5"
        class="text-primary dark:text-primary-dark group-hover:text-secondary dark:group-hover:text-secondary-dark cursor-pointer"
        icon="fa-solid fa-futbol"
      />
      <p class="text-sm" v-else>3:42</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
});
const openRightSidebar = useRightSidebar();
</script>
