<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <h1 class="text-center text-4xl text-primary dark:text-primary-dark mb-2">
      Completar o registro
    </h1>
    <div class="flex justify-between">
      <div
        class="h-0.5 w-80 rounded-full bg-primary dark:bg-primary-dark mb-20"
      ></div>
    </div>
    <h1
      class="text-center pb-8 text-xl text-primary dark:text-primary-dark font-bold"
    >
      Informações
    </h1>
    <div class="flex w-full">
      <TheAvatar
        v-model:path="avatarPath"
        :username="username"
        @upload="updateProfile"
        class="mr-8"
        is-edit
      />
      <div class="w-full">
        <TheInput v-model="username" placeholder="Username" class="mb-4" />
        <TheInput v-model="fullName" placeholder="Nome completo" class="mb-4" />
        <TheListBox
          v-model="selectedPosition"
          placeholder="Selecionar a posição"
          :options="
            positionOptions.map(
              (positon) => ({ text: positon.name, id: positon.id } || [])
            )
          "
          class="mb-4"
        />
        <TheListBox
          v-model="selectedTeam"
          placeholder="Selecionar o time"
          :options="
            teamOptions.map((team) => ({ text: team.name, id: team.id } || []))
          "
          class="mb-4"
        />
      </div>
    </div>
    <AttributesAttributeBuilder v-model="userAttributes" isEdit />
    <div class="flex items-center justify-center mt-8">
      <TheButton
        class="w-[200px] h-12"
        content="Finalizar"
        @click="() => finishUserRegistration()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useDefaultHead("Completar o registro");

import { useUserApi } from "~/composables/api/useUser";
import type { Team, User } from "~/lib/data.types";

const { currentUser, setCurrentUser } = useCurrentUser();

if (!!currentUser.value.id && currentUser.value.team) await navigateTo("/");

const { data } = await useFetch(`/api/team/teams`);
const teamOptions: Ref<Array<Team>> = ref(data.value as Team[]);
//TODO Criar table no supabase pra isso
const positionOptions: Ref<Array<{ name: string; id: string }>> = ref([
  { name: "PE", id: "1" },
  { name: "ATA", id: "2" },
  { name: "PD", id: "31" },
  { name: "MEI", id: "14" },
  { name: "MC", id: "21" },
  { name: "ME", id: "14" },
  { name: "MD", id: "11" },
  { name: "VOL", id: "51" },
  { name: "LE", id: "12318" },
  { name: "LD", id: "1348" },
  { name: "ZAG", id: "3318" },
]);
const selectedTeam = ref({ text: "", id: "" });
const selectedPosition = ref({ text: "", id: "" });
const username = ref("");
const fullName = ref("");
const avatarPath = ref("");

const userAttributes = ref({
  pace: currentUser.value.pace,
  shooting: currentUser.value.shooting,
  passing: currentUser.value.passing,
  dribbling: currentUser.value.dribbling,
  defending: currentUser.value.defending,
  physical: currentUser.value.physical,
  points: currentUser.value.points,
});

const { finishRegistration, getUser, updatePicture, updateAttributes } =
  useUserApi();

const finishUserRegistration = async () => {
  await finishRegistration(
    currentUser.value.id,
    username.value,
    fullName.value,
    selectedTeam.value.id
  );
  await updateAttributes(
    currentUser.value.id,
    userAttributes.value.pace,
    userAttributes.value.shooting,
    userAttributes.value.passing,
    userAttributes.value.dribbling,
    userAttributes.value.physical,
    userAttributes.value.physical,
    userAttributes.value.points
  );

  const userResponse = await getUser(currentUser.value.id);
  setCurrentUser(userResponse as User);

  await navigateTo("/");
};

async function updateProfile() {
  await updatePicture(currentUser.value.id, avatarPath.value);
}
</script>
~/composables/api/useUser
