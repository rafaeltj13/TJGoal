<template>
  <NuxtLink
    :to="toRoute"
    :class="{ '!justify-start': openLeftSidebar }"
    class="w-fit flex items-center justify-center hover:scale-125 transition-transform cursor-pointer relative group"
  >
    <TheIcon
      customClass="w-8 p-3 text-md text-primary dark:text-primary-dark  cursor-pointer"
      :faIcon="`fa-solid ${props.icon}`"
    />
    <p
      v-if="!openLeftSidebar"
      class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-xl shadow-xl text-background dark:text-background-dark dark:bg-primary-dark bg-primary text-[9px] font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100"
    >
      {{ props.title }}
    </p>
    <p
      v-else
      class="pl-1 text-primary dark:text-primary-dark text-xs font-bold"
    >
      {{ props.title }}
    </p>
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
