<template>
  <div :class="{ dark: darkMode }" :key="uniqueKey">
    <TheHeader />
    <div
      class="flex items-start justify-between bg-background dark:bg-background-dark pt-16"
    >
      <TheLeftSideBar />
      <div
        :class="{
          'pr-16': !openRightSidebar,
          'pr-48': openRightSidebar,
          'pl-16': !openLeftSidebar,
          'pl-48': openLeftSidebar,
        }"
        class="w-full transition-all duration-150 ease-in-out"
      >
        <slot />
        <TheNotification />
      </div>
      <TheRightSideBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserAPI } from "~/composables/api/useUserAPI";

const darkMode = useDarkMode();
const openRightSidebar = useRightSidebar();
const openLeftSidebar = useLeftSidebar();

const supabase = useSupabaseClient();
const { currentUser, setCurrentUser } = useCurrentUser();

const { getUser } = useUserAPI();

supabase.auth.onAuthStateChange(async (event, session) => {
  const userProfile = session?.user ?? null;
  if (!userProfile) {
    setCurrentUser(null);
    return;
  }

  const loggeduser = await getUser(userProfile?.id);
  setCurrentUser(loggeduser);

  if (loggeduser && loggeduser.id && !loggeduser.team) {
    navigateTo("/register");
  }
});

const uniqueKey = computed(
  () => new Date().toISOString() + currentUser.value.id
);
</script>
