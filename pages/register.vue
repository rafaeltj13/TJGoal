<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <h1 class="text-center text-4xl text-primary dark:text-primary-dark mb-2">
      Completar o registro
    </h1>
    <div class="flex justify-center">
      <div
        class="h-0.5 w-80 rounded-full bg-primary dark:bg-primary-dark mb-20"
      ></div>
    </div>
    <TheInput v-model="username" placeholder="Username" class="mb-4" />
    <TheInput v-model="fullName" placeholder="Nome completo" class="mb-4" />
    <TheSelectDropdown
      v-model="selectedTeam"
      :options="
        teamOptions.map((team) => ({ text: team.name, id: team.id } || []))
      "
      class="mb-4"
    />
    <div class="flex items-center justify-center">
      <TheButton content="Finalizar" @click="finishUserRegistration()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserAPI } from "~/composables/api/useUserAPI";
import { Team } from "~/lib/data.types";

useDefaultHead("Completar registro");

const { currentUser, setCurrentUser } = useCurrentUser();

const { data } = await useFetch(`/api/team/teams`);
const teamOptions: Ref<Array<Team>> = ref(data.value as Team[]);

const selectedTeam = ref({ text: "", id: "" });
const username = ref("");
const fullName = ref("");

const { finishRegistration, getUser } = useUserAPI();

const finishUserRegistration = async () => {
  await finishRegistration(
    currentUser.value.id,
    username.value,
    fullName.value,
    selectedTeam.value.id
  );

  const userResponse = await getUser(currentUser.value.id);
  setCurrentUser(userResponse);

  navigateTo("/");
};
</script>
