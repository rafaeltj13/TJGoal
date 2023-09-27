<template>
  <div
    v-if="user && user.id && user.team"
    :class="{ 'w-48': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 right-0 h-full flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="p-4 px-2 w-full">
      <div
        class="flex items-center justify-between mb-2"
        :class="{ '!justify-center  ': !openRightSidebar }"
      >
        <div>
          <LevelIcon :icon="user.level?.icon || ''" class="mb-2" />
          <p class="text-text dark:text-text-dark text-center font-bold">
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
            class="w-full bg-background rounded-full h-3.5 dark:bg-background-dark border border-primary dark:border-primary-dark flex items-center"
          >
            <div
              class="bg-gradient-to-r from-secondary dark:from-secondary-dark to-primary dark:to-primary-dark h-3 rounded-full"
              :style="`width: ${currentProgress || 1}%`"
            ></div>
          </div>
        </div>
        <div v-if="openRightSidebar">
          <div>
            <LevelIcon
              :icon="user.level?.next_level?.icon || ''"
              class="mb-2"
            />
            <p class="text-text dark:text-text-dark text-center font-bold">
              {{ user.level?.max_goals }}
            </p>
          </div>
        </div>
      </div>
      <hr
        class="bg-accent dark:bg-accent-dark border border-accent dark:border-accent-dark rounded-full"
      />
      <ShootList />
      <hr
        class="bg-accent dark:bg-accent-dark border border-accent dark:border-accent-dark rounded-full"
      />
      <div
        class="mt-2"
        :class="{ 'flex items-center justify-between': openRightSidebar }"
      >
        <div>
          <img
            class="mt-2 w-12 h-12 hover:scale-125 transition-transform cursor-pointer"
            :src="user.team?.logo || ''"
            alt="team-logo"
          />
          <p class="text- lg text-text dark:text-text-dark text-center mt-1">
            13661
          </p>
        </div>
        <p
          class="text-4xl text-accent dark:text-accent-dark text-center font-bold"
        >
          x
        </p>
        <div
          :class="{ 'flex items-center flex-col-reverse': openRightSidebar }"
        >
          <p class="text- lg text-text dark:text-text-dark text-center mt-1">
            4829
          </p>
          <img
            class="mt-2 w-12 h-12 hover:scale-125 transition-transform cursor-pointer"
            src="https://s.sde.globo.com/media/organizations/2020/12/21/juventus-italia-svg.svg"
            alt="enemy-logo"
          />
        </div>
      </div>
    </div>
    <TheIcon
      v-if="!openRightSidebar"
      customClass="pb-20 text-accent dark:text-accent-dark group-hover:text-background cursor-pointer"
      faIcon="fa-solid fa-angles-left"
      @click="openRightSidebar = !openRightSidebar"
    />
    <TheIcon
      v-else
      customClass="pb-20 text-accent dark:text-accent-dark group-hover:text-background cursor-pointer"
      faIcon="fa-solid fa-angles-right"
      @click="openRightSidebar = !openRightSidebar"
    />
  </div>
</template>

<script setup lang="ts">
import { useUserAPI } from "~/composables/api/useUserAPI";

const openRightSidebar = useRightSidebar();
const supabase = useSupabaseClient();
const { currentUser, setCurrentUser } = useCurrentUser();

let user = computed(() => currentUser.value);

const { getUser } = useUserAPI();

supabase.auth.onAuthStateChange(async (event, session) => {
  const userProfile = session?.user ?? null;
  //TODO salvar o id do user de alguma forma e aqui so atualizar esse id, provavelmente em cookies
  // que ai eu pego o user as vezes so, ta fazendo essa request sempre que eu faço qualquer outra request

  const loggeduser = await getUser(userProfile?.id);
  setCurrentUser(loggeduser);

  if (loggeduser && loggeduser.id && !loggeduser.team) {
    navigateTo("/register");
  }
});

const currentProgress = computed(() => {
  const minGoals = user.value.level?.min_goals || 0;
  const maxGoals = user.value.level?.max_goals || 0;
  const currentGoals = user.value.goals;

  return Math.floor(100 * ((currentGoals - minGoals) / (maxGoals - minGoals)));
});
</script>
