<template>
  <div
    class="p-8 max-w-[800px] mx-auto min-h-[100vh] text-primary dark:text-primary-dark"
  >
    <TheAvatar
      v-model:path="userAvatar"
      :username="user?.username"
      @upload="() => {}"
      :is-edit="false"
      class="sm:hidden flex pb-4"
    />
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div>
          <TheAvatar
            v-model:path="userAvatar"
            :username="user?.username"
            @upload="() => {}"
            :is-edit="false"
            class="sm:flex hidden"
          />
        </div>
        <p class="text-xl font-bold md:text-[46px]">{{ user?.username }}</p>
        <img
          class="w-10 md:w-12 md:h-12 rounded-lg"
          src="https://s.sde.globo.com/media/organizations/2019/07/16/Brasil_rgYHF6Z.svg"
          :alt="`nacional-flag`"
        />
      </div>
      <img
        class="w-16 h-16 rounded-lg"
        :src="`/emblems/${user?.team?.logo}.png`"
        :alt="`${user?.team?.logo}-team-logo`"
      />
    </div>
    <div class="h-[0.5px] w-full bg-accent dark:bg-accent-dark my-6"></div>
    <div class="flex md:flex-row flex-col items-center justify-between py-4">
      <div class="flex items-center gap-4 md:pb-0 pb-6">
        <img
          class="w-16 h-16 rounded-lg"
          :src="`/levels/${user?.level?.id}.png`"
          :alt="`${user?.level?.id}-level-icon`"
        />
        <p class="text-xl">{{ user?.level?.name }}</p>
      </div>
      <div class="flex flex-wrap items-start gap-2 justify-center">
        <div
          class="flex flex-col items-center justify-center md:w-20 w-16 mr-2"
        >
          <h1 class="text-3xl font-bold">{{ user?.goals }}</h1>
          <p class="text-center text-sm font-bold">Gols</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ user?.goals }}</p>
          <p class="text-center text-xs">Chute</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ user?.goals }}</p>
          <p class="text-center text-xs">Penalti</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ user?.goals }}</p>
          <p class="text-center text-xs">Contra Ataque</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ user?.goals }}</p>
          <p class="text-center text-xs">Jogada Ensaiada</p>
        </div>
      </div>
    </div>
    <AttributesAttributeBuilder v-model="userAttributes" />
  </div>
</template>
<script setup lang="ts">
import { useUserApi } from "~/composables/api/useUser";

const { getUser } = useUserApi();
const route = useRoute();

const user = await getUser((route.params?.id as string) || "");

if (!user) navigateTo("/");

useDefaultHead(`TJ-Goal - ${user?.username}`);

const userAttributes = ref({
  pace: user?.pace || 0,
  shooting: user?.shooting || 0,
  passing: user?.passing || 0,
  dribbling: user?.dribbling || 0,
  defending: user?.defending || 0,
  physical: user?.physical || 0,
  points: user?.points || 0,
});

const userAvatar = ref(user?.avatar_url);
</script>
