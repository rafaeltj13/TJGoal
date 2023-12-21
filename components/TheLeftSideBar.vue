<template>
  <div
    :class="{
      'w-56': openLeftSidebar,
      'w-16': !openLeftSidebar,
    }"
    class="transition-all h-[calc(100vh-64px)] duration-300 ease-in-out min-w-16 flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between"
  >
    <div class="p-1">
      <SidebarRouteOption
        title="Classificação"
        icon="fa-bars"
        to-route="/standings"
      />
      <SidebarRouteOption
        title="Niveis"
        icon="fa-arrow-up-wide-short"
        to-route="/levels"
      />
      <SidebarRouteOption
        title="Artilharia"
        icon="fa-ranking-star"
        to-route="/ranking"
      />
      <SidebarRouteOption title="Loja" icon="fa-store" to-route="/market" />
      <SidebarRouteOption title="Sobre" icon="fa-users" to-route="/about" />
    </div>
    <ClientOnly>
      <TheIcon
        v-show="openLeftSidebar"
        customClass="pb-4 text-accent dark:text-accent-dark group-hover:text-background cursor-pointer"
        faIcon="fa-solid fa-angles-left"
        @click="openLeftSidebar = !openLeftSidebar"
      />
      <TheIcon
        v-show="!openLeftSidebar"
        customClass="pb-4 text-accent dark:text-accent-dark group-hover:text-background cursor-pointer"
        faIcon="fa-solid fa-angles-right"
        @click="openLeftSidebar = !openLeftSidebar"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const openLeftSidebar = useLeftSidebar();
</script>
