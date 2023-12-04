<template>
  <div
    class="p-8 max-w-[800px] mx-auto min-h-[100vh] text-primary dark:text-primary-dark"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div>
          <TheAvatar
            v-model:path="userAvatar"
            :username="user?.username"
            @upload="() => {}"
            :is-edit="false"
          />
        </div>
        <p class="text-[46px]">{{ user?.username }}</p>
        <img
          class="w-12 h-12 rounded-lg"
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
    <div class="flex items-center justify-between py-4">
      <div class="flex items-center gap-4">
        <img
          class="w-16 h-16 rounded-lg"
          :src="`/levels/${user?.level?.id}.png`"
          :alt="`${user?.level?.id}-level-icon`"
        />
        <p class="text-xl">{{ user?.level?.name }}</p>
      </div>
      <div class="flex items-start gap-2">
        <div class="flex flex-col items-center justify-center w-20 mr-2">
          <h1 class="text-3xl font-bold">{{ user?.goals }}</h1>
          <p class="text-center text-sm font-bold">Gols</p>
        </div>
        <div class="flex flex-col items-center justify-center w-20">
          <p class="text-2xl">{{ user?.goals / 4 }}</p>
          <p class="text-center text-xs">Chute</p>
        </div>
        <div class="flex flex-col items-center justify-center w-20">
          <p class="text-2xl">{{ user?.goals / 4 }}</p>
          <p class="text-center text-xs">Penalti</p>
        </div>
        <div class="flex flex-col items-center justify-center w-20">
          <p class="text-2xl">{{ user?.goals / 4 }}</p>
          <p class="text-center text-xs">Contra Ataque</p>
        </div>
        <div class="flex flex-col items-center justify-center w-20">
          <p class="text-2xl">{{ user?.goals / 4 }}</p>
          <p class="text-center text-xs">Jogada Ensaiada</p>
        </div>
      </div>
    </div>
    <!-- <p class="pt-12">Rodada Atual:</p>
    <div class="flex items-center justify-between pt-8 pb-16">
      <div class="flex items-center justify-end gap-4 w-[35%]">
        <p class="text-xl">{{ user?.team?.name }}</p>
        <img
          class="w-16 h-16 rounded-lg"
          :src="`/emblems/${user?.team?.logo}.png`"
          :alt="`${user?.team?.logo}-team-logo`"
        />
      </div>
      <div class="flex items-center gap-4">
        <p class="text-2xl">13661</p>
        <p class="text-accent dark:text-accent-dark font-bold">X</p>
        <p class="text-2xl">4829</p>
      </div>
      <div class="flex items-center gap-4 w-[35%]">
        <img
          class="w-16 h-16 rounded-lg"
          :src="`/emblems/juve.png`"
          :alt="`juve-team-logo`"
        />
        <p class="text-xl">Juventus</p>
      </div>
    </div> -->
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
~/composables/api/useUser
