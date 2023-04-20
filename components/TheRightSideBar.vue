<template>
  <div
    :class="{ 'w-48': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 right-0 h-full flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="py-4">
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full mx-2"
      />
      <SidebarMenuOption title="Chutar" />
      <SidebarMenuOption title="Cobrar Pênalti" />
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full mx-2"
      />
    </div>
    <font-awesome-icon
      v-show="!openRightSidebar"
      class="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
      icon="fa-solid fa-angles-left"
      @click="openRightSidebar = !openRightSidebar"
    />
    <font-awesome-icon
      v-show="openRightSidebar"
      class="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
      icon="fa-solid fa-angles-right"
      @click="openRightSidebar = !openRightSidebar"
    />
  </div>
</template>

<script setup lang="ts">
const openRightSidebar = useRightSidebar();
</script>
