<template>
  <div :class="{ dark: darkMode }">
    <TheHeader />
    <div
      class="flex items-start justify-between bg-secondary dark:bg-secondary-dark pt-16 overflow-y-hidden"
    >
      <TheLeftSideBar />
      <div
        :class="{ 'pr-16': !openRightSidebar, 'pr-48': openRightSidebar }"
        class="w-full overflow-y-auto pl-16"
      >
        <slot />
      </div>
      <TheRightSideBar />
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = useDarkMode();
const openRightSidebar = useRightSidebar();
</script>
