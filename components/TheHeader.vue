<template>
  <div
    class="w-[100vw] h-16 bg-primary dark:bg-primary-dark p-4 flex justify-between items-center fixed z-50"
  >
    <NuxtLink
      class="text-secondary dark:text-secondary-dark text-3xl h-7 hover:scale-110 transition-transform cursor-pointer"
      to="/"
      >PBGOL</NuxtLink
    >
    <div class="flex gap-4 items-center">
      <ClientOnly>
        <font-awesome-icon
          v-if="!darkMode"
          key="dark-mode"
          class="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
          icon="fa-solid fa-moon"
          @click="darkMode = !darkMode"
        />
        <font-awesome-icon
          v-else
          key="light-mode"
          class="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
          icon="fa-solid fa-sun"
          @click="darkMode = false"
        />
      </ClientOnly>
      <TheModal>
        <template #default>
          <font-awesome-icon
            class="pt-1 text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
            icon="fa-solid fa-right-to-bracket"
          />
        </template>
      </TheModal>
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = useDarkMode();
</script>
