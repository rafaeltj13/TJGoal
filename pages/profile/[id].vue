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
          <p class="text-center text-sm font-bold">{{ $t("profile.goals") }}</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ goalsByCategory.default }}</p>
          <p class="text-center text-xs">{{ $t("profile.shoot") }}</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ goalsByCategory.penalty }}</p>
          <p class="text-center text-xs">{{ $t("profile.penalty") }}</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ goalsByCategory.fault }}</p>
          <p class="text-center text-xs">{{ $t("profile.freeKick") }}</p>
        </div>
        <div class="flex flex-col items-center justify-center md:w-20 w-16">
          <p class="text-2xl">{{ goalsByCategory.counterAttack }}</p>
          <p class="text-center text-xs">{{ $t("profile.counterAttack") }}</p>
        </div>
      </div>
    </div>
    <AttributesAttributeBuilder
      v-model="userAttributes"
      :is-edit="editMode"
      @save="handleSave"
    />
    <div class="flex justify-center items-center pt-8">
      <TheButton
        v-if="ownProfile && !editMode"
        classType="outlined"
        :content="$t('profile.edit')"
        @click="editMode = true"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserApi } from "~/composables/api/useUser";
import { useGoalApi } from "~/composables/api/useGoals"; // Import the getGoalsByUser function

const { getUser, updateAttributes } = useUserApi();
const { getGoalsByUser } = useGoalApi();
const { currentUser } = useCurrentUser();
const route = useRoute();
const editMode = ref(false);

const user = await getUser((route.params?.id as string) || "");
const ownProfile = user?.id === currentUser?.value.id;

const goalsByCategory: {
  default: number;
  penalty: number;
  fault: number;
  counterAttack: number;
} = await getGoalsByUser((route.params?.id as string) || "");

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

const handleSave = () => {
  updateAttributes(
    currentUser.value.id,
    userAttributes.value.pace,
    userAttributes.value.shooting,
    userAttributes.value.passing,
    userAttributes.value.dribbling,
    userAttributes.value.defending,
    userAttributes.value.physical,
    userAttributes.value.points
  );
  editMode.value = false;
};
</script>
