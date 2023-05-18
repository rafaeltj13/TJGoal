<template>
  <div
    class="w-[100vw] h-16 bg-gradient-to-l from-primary dark:from-primary-dark to-secondary dark:to-secondary-dark py-4 px-6 flex justify-between items-center fixed z-50"
  >
    <NuxtLink
      class="text-background dark:text-background-dark text-3xl h-7 hover:scale-110 transition-transform cursor-pointer"
      to="/"
      >PBGOL</NuxtLink
    >
    <div class="flex gap-4 items-center">
      <p
        v-if="currentUser && currentUser.username"
        class="text-background dark:text-background-dark hover:scale-110 transition-transform cursor-pointer text-lg"
      >
        {{ currentUser.username }}
      </p>
      <ClientOnly>
        <TheIcon
          v-if="!darkMode"
          key="dark-mode"
          customClass="text-accent dark:text-accent-dark hover:scale-110 transition-transform cursor-pointer text-lg"
          faIcon="fa-solid fa-moon"
          @click="darkMode = !darkMode"
        />
        <TheIcon
          v-else
          key="light-mode"
          customClass="text-accent dark:text-accent-dark hover:scale-110 transition-transform cursor-pointer text-lg"
          faIcon="fa-solid fa-sun"
          @click="darkMode = false"
        />
        <AuthModal v-if="!(currentUser && currentUser.id)" />
        <TheIcon
          v-else
          @click="signout"
          fa-icon="fa-solid fa-right-from-bracket"
          custom-class="text-accent dark:text-accent-dark hover:scale-110 transition-transform cursor-pointer text-lg"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = useDarkMode();
const supabase = useSupabaseClient();
const { currentUser } = useCurrentUser();

const signout = async () => {
  await supabase.auth.signOut();
  navigateTo("/");
};
</script>
