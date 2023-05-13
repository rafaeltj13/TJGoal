<template>
  <div
    v-if="user && user.id && user.team"
    :class="{ 'w-48': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 right-0 h-full flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="p-4 px-2 w-full">
      <div
        class="flex items-center justify-between"
        :class="{ '!justify-center  ': !openRightSidebar }"
      >
        <div>
          <LevelIcon :icon="user.level?.icon || ''" class="mb-2" />
          <p class="text-text dark:text-text-dark text-center">
            {{ user.goals }}
          </p>
        </div>
        <div
          v-if="openRightSidebar"
          class="flex flex-col items-center w-20 pb-4"
        >
          <p class="text-text dark:text-text-dark text-xs mb-2">
            {{ user.level?.name || "" }}
          </p>
          <div
            class="w-full bg-background rounded-full h-2.5 dark:bg-background-dark"
          >
            <div
              class="bg-primary h-2.5 rounded-full"
              :style="`width:${Math.floor(
                (user.goals / (user.level?.max_goals || 0)) * 100
              )}%`"
            ></div>
          </div>
        </div>
        <div v-if="openRightSidebar">
          <div>
            <LevelIcon
              :icon="user.level?.next_level?.icon || ''"
              class="mb-2"
            />
            <p class="text-text dark:text-text-dark text-center">
              {{ user.level.max_goals }}
            </p>
          </div>
        </div>
      </div>
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full"
      />
      <ShootList />
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full"
      />
      <div :class="{ 'flex items-center justify-between': openRightSidebar }">
        <div>
          <img
            class="mt-2 w-12 h-12 hover:scale-110 transition-transform cursor-pointer"
            :src="user.team?.logo || ''"
            alt="team-logo"
          />
          <p class="text- lg text-text dark:text-text-dark text-center mt-1">
            13661
          </p>
        </div>
        <p class="text-4xl text-text dark:text-text-dark text-center font-bold">
          x
        </p>
        <div
          :class="{ 'flex items-center flex-col-reverse': openRightSidebar }"
        >
          <p class="text- lg text-text dark:text-text-dark text-center mt-1">
            4829
          </p>
          <img
            class="mt-2 w-12 h-12 hover:scale-110 transition-transform cursor-pointer"
            src="https://s.sde.globo.com/media/organizations/2020/12/21/juventus-italia-svg.svg"
            alt="enemy-logo"
          />
        </div>
      </div>
    </div>
    <TheIcon
      v-if="!openRightSidebar"
      customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-background cursor-pointer"
      faIcon="fa-solid fa-angles-left"
      @click="openRightSidebar = !openRightSidebar"
    />
    <TheIcon
      v-else
      customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-background cursor-pointer"
      faIcon="fa-solid fa-angles-right"
      @click="openRightSidebar = !openRightSidebar"
    />
  </div>
</template>

<script setup lang="ts">
const openRightSidebar = useRightSidebar();
const supabase = useSupabaseClient();
const { currentUser, setCurrentUser } = useCurrentUser();
const { getCurrentUser } = useAPI();

let user = computed(() => currentUser.value);

supabase.auth.onAuthStateChange(async (event, session) => {
  const userProfile = session?.user ?? null;

  const userResponse = await getCurrentUser(userProfile?.id || null);
  setCurrentUser(userResponse);

  if (userResponse && userResponse.id && !userResponse.team) {
    navigateTo("/register");
  }
});
</script>
