<template>
  <div :class="{ dark: darkMode }" :key="uniqueKey">
    <TheHeader />
    <div
      class="flex items-start justify-between bg-background dark:bg-background-dark pt-16"
    >
      <TheLeftSideBar />
      <div
        class="transition-all duration-150 ease-in-out overflow-y-auto h-[calc(100vh-64px)] w-full"
      >
        <slot />
        <TheNotification />
      </div>
      <TheRightSideBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserApi } from "~/composables/api/useUser";

const route = useRoute();
const darkMode = useDarkMode();
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

onMounted(() => {
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
    const loggeduser = await useUserApi().getUser(userProfile?.id);
    setCurrentUser(loggeduser);

    if (
      !!currentUser.value.id &&
      !currentUser.value.team &&
      route.path !== "register"
    ) {
      await navigateTo("/register");
    }
  });
});
</script>
~/composables/api/useUser
