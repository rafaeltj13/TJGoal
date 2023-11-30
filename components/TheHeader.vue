<template>
  <div
    class="shadow-xl w-[100vw] h-16 bg-gradient-to-t from-primary dark:from-primary-dark to-secondary dark:to-secondary-dark py-4 px-6 flex justify-between items-center fixed z-20"
  >
    <NuxtLink
      class="text-background dark:text-background-dark text-3xl h-7 hover:scale-125 transition-transform cursor-pointer"
      to="/"
      >TJ-GOAL</NuxtLink
    >
    <div class="flex items-center">
      <ClientOnly class="flex items-center">
        <!-- TODO COLOCAR OS GREENS AQUI -->
        <AuthModal v-if="!(currentUser && currentUser.id)" />
        <HeaderConfig v-else />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentUser } = useCurrentUser();
</script>
