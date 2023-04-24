<template>
  <div
    class="w-[100vw] h-16 bg-gradient-to-r from-primary dark:from-primary-dark to-tertiary dark:to-tertiary-dark p-4 flex justify-between items-center fixed z-50"
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
        <template #content>
          <div class="flex flex-col items-center py-8">
            <p
              class="text-2xl text-primary dark:text-primary-dark font-bold mb-8"
            >
              Sign in
            </p>
            <TheInput v-model="login" placeholder="Email" class="mb-4" />
            <TheInput
              v-model="pass"
              placeholder="Password"
              type="password"
              class="mb-8"
            />
            <div class="flex gap-4">
              <TheButton content="Criar conta" type="outlined" />
              <TheButton content="Entrar" />
            </div>
          </div>
        </template>
      </TheModal>
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = useDarkMode();

const login = ref("");
const pass = ref("");
</script>
