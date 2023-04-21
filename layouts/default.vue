<template>
  <div :class="{ dark: darkMode }">
    <TheHeader />
    <div
      class="flex items-start justify-between bg-secondary dark:bg-secondary-dark pt-16 overflow-y-hidden"
    >
      <TheLeftSideBar />
      <div
        :class="{
          'pr-16': !openRightSidebar,
          'pr-48': openRightSidebar,
          'pl-16': !openLeftSidebar,
          'pl-48': openLeftSidebar,
        }"
        class="w-full overflow-y-auto transition-all duration-150 ease-in-out"
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
const openLeftSidebar = useLeftSidebar();
</script>
