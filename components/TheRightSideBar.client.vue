<template>
  <div
    v-if="user && user.id"
    :class="{ 'w-48': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 right-0 h-full flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="p-4 px-2 w-full">
      <div
        class="flex items-center justify-between"
        :class="{ '!justify-center  ': !openRightSidebar }"
      >
        <div>
          <div
            class="rounded-xl bg-gray-300 w-10 h-10 flex items-center justify-center mb-2"
          >
            <TheIcon
              customClass="text-slate-400 text-2xl"
              faIcon="fa-solid fa-hammer"
            />
          </div>
          <p class="text-tertiary dark:text-tertiary-dark text-center">
            {{ user.goals }}
          </p>
        </div>
        <div
          v-if="openRightSidebar"
          class="flex flex-col items-center w-20 pb-4"
        >
          <p class="text-tertiary dark:text-tertiary-dark text-xs mb-2">
            Martelo
          </p>
          <div
            class="w-full bg-secondary rounded-full h-2.5 dark:bg-secondary-dark"
          >
            <div
              class="bg-primary h-2.5 rounded-full"
              :style="`width:${Math.floor((user.goals / 112) * 100)}%`"
            ></div>
          </div>
        </div>
        <div v-if="openRightSidebar">
          <div>
            <div
              class="rounded-xl bg-gray-300 w-10 h-10 flex items-center justify-center mb-2"
            >
              <TheIcon
                customClass="text-slate-400 text-2xl"
                faIcon="fa-solid fa-ghost"
              />
            </div>
            <p class="text-tertiary dark:text-tertiary-dark text-center">112</p>
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
          <p
            class="text- lg text-tertiary dark:text-tertiary-dark text-center mt-1"
          >
            13661
          </p>
        </div>
        <p
          class="text-4xl text-tertiary dark:text-tertiary-dark text-center font-bold"
        >
          x
        </p>
        <div
          :class="{ 'flex items-center flex-col-reverse': openRightSidebar }"
        >
          <p
            class="text- lg text-tertiary dark:text-tertiary-dark text-center mt-1"
          >
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
      customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
      faIcon="fa-solid fa-angles-left"
      @click="openRightSidebar = !openRightSidebar"
    />
    <TheIcon
      v-else
      customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
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
});
</script>
