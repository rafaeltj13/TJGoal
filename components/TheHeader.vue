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
        <TheIcon
          v-if="!darkMode"
          key="dark-mode"
          customClass="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
          faIcon="fa-solid fa-moon"
          @click="darkMode = !darkMode"
        />
        <TheIcon
          v-else
          key="light-mode"
          customClass="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
          faIcon="fa-solid fa-sun"
          @click="darkMode = false"
        />
        <AuthSignInModal v-if="!(user && user.id)" />
        <TheIcon
          v-else
          @click="signout"
          fa-icon="fa-solid fa-right-from-bracket"
          custom-class="text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@supabase/gotrue-js";

const darkMode = useDarkMode();
const supabase = useSupabaseClient();

const signout = async () => {
  const { error } = await supabase.auth.signOut();
};

let user: Ref<User | null> = ref(null);

supabase.auth.onAuthStateChange((event, session) => {
  user.value = session?.user ?? null;
});
</script>
