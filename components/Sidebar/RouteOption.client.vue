<template>
  <NuxtLink
    :to="toRoute"
    :class="{ '!justify-start': openLeftSidebar }"
    class="flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative group"
  >
    <TheIcon
      customClass="w-8 p-4 text-xl text-primary dark:text-primary-dark group-hover:text-secondary dark:group-hover:text-secondary-dark cursor-pointer"
      :faIcon="`fa-solid ${props.icon}`"
    />
    <span
      v-if="!openLeftSidebar"
      class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-xl shadow-xl text-secondary dark:text-secondary-dark dark:bg-primary-dark bg-primary text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100"
    >
      {{ props.title }}
    </span>
    <span
      v-else
      class="pl-1 text-primary dark:text-primary-dark text-md group-hover:text-secondary dark:group-hover:text-secondary-dark"
      >{{ props.title }}</span
    >
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  toRoute: {
    type: String,
    required: true,
  },
});
const openLeftSidebar = useLeftSidebar();
</script>
