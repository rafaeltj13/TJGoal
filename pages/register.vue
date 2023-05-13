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
    <TheSelectDopdown
      v-model="selectedTeam"
      :options="
        teamOptions.map((team) => ({ text: team.name, id: team.id } || []))
      "
      class="mb-4"
    />
    <div class="flex items-center justify-center">
      <TheButton content="Finalizar" @click="finishRegistration" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Team } from "~/lib/data.types";

useHead({
  title: "Completar registro",
});

const { currentUser, setCurrentUser } = useCurrentUser();
const { getTeams, updateUser, getCurrentUser } = useAPI();

const teamOptions: Ref<Array<Team>> = ref(await getTeams());

const selectedTeam = ref({ text: "", id: "" });
const username = ref("");
const fullName = ref("");

const finishRegistration = async () => {
  await updateUser(
    currentUser.value.id,
    username.value,
    fullName.value,
    selectedTeam.value.id
  );

  const userResponse = await getCurrentUser(currentUser.value.id);
  setCurrentUser(userResponse);

  navigateTo("/");
};
</script>
