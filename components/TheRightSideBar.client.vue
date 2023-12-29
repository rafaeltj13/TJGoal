<template>
  <div
    v-if="user && user.id && user.team"
    :class="{ 'w-56': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all h-[calc(100vh-64px)] duration-300 ease-in-out flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="p-4 px-2 w-full">
      <div
        class="flex items-center justify-between mb-2"
        :class="{ '!justify-center  ': !openRightSidebar }"
      >
        <div>
          <LevelIcon :current-level="user.level?.id || 1" class="mb-2" />
          <p
            class="text-text dark:text-text-dark text-center font-bold text-sm"
          >
            {{ user.goals }}
          </p>
        </div>
        <div
          v-if="openRightSidebar"
          class="flex flex-col items-center w-20 pb-4"
        >
          <p class="text-text dark:text-text-dark text-xs mb-2 text-center">
            {{ user.level?.name || "" }}
          </p>
          <div
            class="w-full bg-background rounded-full h-2 dark:bg-background-dark border border-primary dark:border-primary-dark flex items-center"
          >
            <div
              class="bg-gradient-to-r from-secondary dark:from-secondary-dark to-primary dark:to-primary-dark h-2 rounded-full"
              :style="`width: ${currentProgress || 1}%`"
            ></div>
          </div>
        </div>
        <div v-if="openRightSidebar">
          <div>
            <LevelIcon
              :current-level="user.level?.next_level?.id || 1"
              class="mb-2"
            />
            <p
              class="text-text dark:text-text-dark text-center font-bold text-sm"
            >
              {{ user.level?.max_goals }}
            </p>
          </div>
        </div>
      </div>
      <hr
        class="bg-accent dark:bg-accent-dark border border-accent dark:border-accent-dark rounded-full"
      />
      <ShootContainer />
      <!-- <hr
        class="bg-accent dark:bg-accent-dark border border-accent dark:border-accent-dark rounded-full"
      />
      <div
        class="mt-2"
        :class="{ 'flex items-center justify-between': openRightSidebar }"
      >
        <div class="flex flex-col items-center">
          <TeamLogo
            @click="() => navigateTo(`/team/${user.team?.id}`)"
            :logo="user.team.logo"
            class="hover:scale-125 transition-transform cursor-pointer"
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
          class="flex flex-col items-center"
        >
          <p class="text- lg text-text dark:text-text-dark text-center mt-1">
            4829
          </p>
          <TeamLogo
            @click="() => navigateTo(`/team/${user.team?.id}`)"
            logo="juve"
            class="hover:scale-125 transition-transform cursor-pointer"
          />
        </div>
      </div> -->
    </div>
    <TheIcon
      v-if="!openRightSidebar"
      customClass="w-8 h-8 pb-4 text-accent dark:text-accent-dark group-hover:text-background cursor-pointer"
      faIcon="fa-solid fa-angles-left"
      @click="openRightSidebar = !openRightSidebar"
    />
    <TheIcon
      v-else
      customClass="pb-4 text-accent dark:text-accent-dark group-hover:text-background cursor-pointer"
      faIcon="fa-solid fa-angles-right"
      @click="openRightSidebar = !openRightSidebar"
    />
  </div>
</template>

<script setup lang="ts">
const openRightSidebar = useRightSidebar();
const { currentUser } = useCurrentUser();

let user = computed(() => currentUser.value);

const currentProgress = computed(() => {
  const minGoals = user.value.level?.min_goals || 0;
  const maxGoals = user.value.level?.max_goals || 0;
  const currentGoals = user.value.goals;

  return Math.floor(100 * ((currentGoals - minGoals) / (maxGoals - minGoals)));
});
</script>
