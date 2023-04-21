<template>
  <div
    :class="{ 'w-48': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 right-0 h-full flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="p-4 px-2 w-full">
      <div
        class="rounded-xl bg-gray-300 border-primary dark:border-primary-dark border-2 w-10 h-10 flex items-center justify-center mb-2 mx-auto"
      >
        <font-awesome-icon
          class="text-slate-400 text-2xl"
          :icon="`fa-solid fa-hammer`"
        />
      </div>
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full"
      />
      <SidebarMenuOption title="Chutar" />
      <SidebarMenuOption title="Cobrar Pênalti" />
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full"
      />
    </div>
    <ClientOnly>
      <font-awesome-icon
        v-if="!openRightSidebar"
        class="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
        icon="fa-solid fa-angles-left"
        @click="openRightSidebar = !openRightSidebar"
      />
      <font-awesome-icon
        v-else
        class="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
        icon="fa-solid fa-angles-right"
        @click="openRightSidebar = !openRightSidebar"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const openRightSidebar = useRightSidebar();
</script>
