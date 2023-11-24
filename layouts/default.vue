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
import { useUserApi } from "~/composables/api/useUserApi";
import { useRoute } from "vue-router";

const route = useRoute();
const darkMode = useDarkMode();
const openRightSidebar = useRightSidebar();
const openLeftSidebar = useLeftSidebar();
const auth = useAuthCookie();

const supabase = useSupabaseClient();
const { currentUser, setCurrentUser } = useCurrentUser();
const uniqueKey = computed(
  () => new Date().toISOString() + currentUser.value.id
);

const handleSignOut = () => {
  setCurrentUser(null);
  auth.value = "";
};

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === "INITIAL_SESSION" && !session) return;
  if (event === "SIGNED_IN" && auth.value === session?.access_token) return;
  if (event === "SIGNED_OUT") {
    handleSignOut();
    return;
  }
  const userProfile = session?.user || null;
  if (!userProfile) {
    handleSignOut();
    return;
  }
  auth.value = session?.access_token || "";
  // const loggeduser = await useUserApi().getUser(userProfile?.id);
  // setCurrentUser(loggeduser);
  // if (loggeduser && loggeduser.id && !loggeduser.team) {
  //   if (route && route.path !== "register") navigateTo("/register");
  // }
});
</script>
~/composables/api/useUserApi
