<template>
  <div
    class="p-8 max-w-[800px] mx-auto min-h-[100vh] text-primary dark:text-primary-dark"
  >
    <div
      class="flex flex-col-reverse md:flex-row items-center md:justify-between"
    >
      <div class="flex items-center gap-4">
        <p class="text-2xl font-bold md:text-[46px]">{{ team?.name }}</p>
        <!-- <img
          class="w-12 h-12 rounded-lg"
          src="https://s.sde.globo.com/media/organizations/2019/07/16/Brasil_rgYHF6Z.svg"
          :alt="`nacional-flag`"
        /> -->
      </div>
      <img
        class="w-[80%] pb-4 md:pb-0 md:w-16 md:h-16 rounded-lg"
        :src="`/emblems/${team?.logo}.png`"
        :alt="`${team?.logo}-team-logo`"
      />
    </div>
    <div class="h-[0.5px] w-full bg-accent dark:bg-accent-dark my-6"></div>
    <div class="flex flex-col md:flex-row items-center md:justify-between">
      <div class="flex flex-col items-center justify-center mr-6">
        <h1 class="text-4xl font-bold text-center">{{ president }}</h1>
        <p class="text-center text-md font-bold">{{ $t("team.president") }}</p>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex flex-col items-center justify-center w-20 mr-6">
          <h1 class="text-4xl font-bold">{{ vipUsers.length }}</h1>
          <p class="text-center text-md font-bold">{{ $t("team.vips") }}</p>
        </div>
        <div class="flex flex-col items-center justify-center w-20">
          <h1 class="text-4xl">{{ teamUsersData.length }}</h1>
          <p class="text-center text-md">{{ $t("team.players") }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="mt-12 mb-4">
      <h1 class="text-3xl font-bold text-center">Rodada Atual</h1>
    </div>
    <div class="flex items-center justify-between pt-8 pb-16 w-full">
      <div
        @click="() => navigateTo(`/team/${team?.id}`)"
        class="flex items-center justify-start md:justify-end gap-4 w-[35%] hover:scale-125 transition-transform cursor-pointer"
      >
        <p class="text-xl md:flex hidden">{{ team?.name }}</p>
        <img
          class="w-16 h-16 rounded-lg"
          :src="`/emblems/${team?.logo}.png`"
          :alt="`${team?.logo}-team-logo`"
        />
      </div>
      <div class="flex items-center gap-4">
        <p class="md:text-2xl text-md">13661</p>
        <p class="text-accent dark:text-accent-dark font-bold">X</p>
        <p class="md:text-2xl text-md">4829</p>
      </div>
      <div
        class="flex items-center justify-end md:justify-start gap-4 w-[35%] hover:scale-125 transition-transform cursor-pointer"
      >
        <img
          class="w-16 h-16 rounded-lg"
          :src="`/emblems/juve.png`"
          :alt="`juve-team-logo`"
        />
        <p class="text-xl md:flex hidden">Juventus</p>
      </div>
    </div> -->
    <div class="flex items-center justify-center flex-wrap md:flex-nowrap mt-8">
      <RankingTeam :current-ranking="playerScoreDetails" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeamAPI } from "~/composables/api/useTeam";
import { useUserApi } from "~/composables/api/useUser";

const { getTeam } = useTeamAPI();
const { getUsersFromTeam } = useUserApi();
const route = useRoute();

const team = await getTeam((route.params?.id as string) || "");

if (!team) navigateTo("/");

const teamUsersData = await getUsersFromTeam(
  (route.params?.id as string) || ""
);

const vipUsers = computed(() => teamUsersData.filter((user) => user.vip));
const president = computed(() => teamUsersData[0].username || "");
const playerScoreDetails = computed(() =>
  teamUsersData
    .map((user) => ({
      level: user.level?.id,
      viptype: user.vip?.type,
      goalcount: user.goals,
      username: user.username,
      logo: user.team?.logo,
    }))
    .slice(0, 10)
);

useDefaultHead(`TJ-Goal - ${team?.name}`);
</script>
