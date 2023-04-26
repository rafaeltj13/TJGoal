<template>
  <div
    :class="{ 'w-48': openLeftSidebar, 'w-16': !openLeftSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 left-0 h-screen w-16 flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between"
  >
    <div class="p-1">
      <SidebarRouteOption
        title="Ranking"
        icon="fa-ranking-star"
        to-route="/ranking"
      />
      <SidebarRouteOption
        title="Niveis"
        icon="fa-arrow-up-wide-short"
        to-route="/levels"
      />
      <SidebarRouteOption title="Sobre" icon="fa-users" to-route="/about" />
    </div>
    <ClientOnly>
      <TheIcon
        v-show="openLeftSidebar"
        customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
        faIcon="fa-solid fa-angles-left"
        @click="openLeftSidebar = !openLeftSidebar"
      />
      <TheIcon
        v-show="!openLeftSidebar"
        customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
        faIcon="fa-solid fa-angles-right"
        @click="openLeftSidebar = !openLeftSidebar"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const openLeftSidebar = useLeftSidebar();
</script>
