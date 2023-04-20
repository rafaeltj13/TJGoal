<template>
  <div
    class="w-[100vw] h-16 bg-primary dark:bg-primary-dark p-4 flex justify-between items-center fixed z-50"
  >
    <h1
      class="text-secondary dark:text-secondary-dark text-3xl hover:scale-110 transition-transform cursor-pointer"
    >
      <NuxtLink to="/">PBGOL</NuxtLink>
    </h1>
    <div class="flex gap-4 items-center">
      <font-awesome-icon
        v-show="!darkMode"
        key="dark-mode"
        class="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer"
        icon="fa-solid fa-moon"
        @click="darkMode = !darkMode"
      />
      <font-awesome-icon
        v-show="darkMode"
        key="light-mode"
        class="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer"
        icon="fa-solid fa-sun"
        @click="darkMode = false"
      />
      <TheModal>
        <template #default>
          <font-awesome-icon
            class="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer"
            icon="fa-solid fa-user"
          />
        </template>
      </TheModal>
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = useDarkMode();
</script>
