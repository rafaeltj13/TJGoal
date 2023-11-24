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
    <h1
      class="text-center py-8 text-xl text-primary dark:text-primary-dark font-bold"
    >
      Atributos
    </h1>
    <div class="flex items-center justify-between pt-4 gap-4">
      <div class="flex flex-col justify-center items-center">
        <p class="text-accent dark:text-accent-dark text-lg">PAC</p>
        <div class="flex items-center">
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-minus"
            @click="() => {}"
          />
          <p class="text-secondary dark:text-secondary-dark text-lg mx-2">99</p>
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-plus"
            @click="() => {}"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-accent dark:text-accent-dark text-lg">SHO</p>
        <div class="flex items-center">
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-minus"
            @click="() => {}"
          />
          <p class="text-secondary dark:text-secondary-dark text-lg mx-2">99</p>
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-plus"
            @click="() => {}"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-accent dark:text-accent-dark text-lg">PAS</p>
        <div class="flex items-center">
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-minus"
            @click="() => {}"
          />
          <p class="text-secondary dark:text-secondary-dark text-lg mx-2">99</p>
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-plus"
            @click="() => {}"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-accent dark:text-accent-dark text-lg">DRI</p>
        <div class="flex items-center">
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-minus"
            @click="() => {}"
          />
          <p class="text-secondary dark:text-secondary-dark text-lg mx-2">99</p>
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-plus"
            @click="() => {}"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-accent dark:text-accent-dark text-lg">DEF</p>
        <div class="flex items-center">
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-minus"
            @click="() => {}"
          />
          <p class="text-secondary dark:text-secondary-dark text-lg mx-2">99</p>
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-plus"
            @click="() => {}"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-accent dark:text-accent-dark text-lg">PHY</p>
        <div class="flex items-center">
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-minus"
            @click="() => {}"
          />
          <p class="text-secondary dark:text-secondary-dark text-lg mx-2">99</p>
          <TheIcon
            customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-plus"
            @click="() => {}"
          />
        </div>
      </div>
    </div>
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
import { useUserApi } from "~/composables/api/useUserApi";
import type { Team, User } from "~/lib/data.types";

useDefaultHead("Completar registro");

const { currentUser, setCurrentUser } = useCurrentUser();

const { data } = await useFetch(`/api/team/teams`);
const teamOptions: Ref<Array<Team>> = ref(data.value as Team[]);
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

const { finishRegistration, getUser, updatePicture } = useUserApi();

const finishUserRegistration = async () => {
  await finishRegistration(
    currentUser.value.id,
    username.value,
    fullName.value,
    selectedTeam.value.id
  );

  const userResponse = await getUser(currentUser.value.id);
  setCurrentUser(userResponse as User);

  navigateTo("/");
};

async function updateProfile() {
  await updatePicture(currentUser.value.id, avatarPath.value);
}
</script>
~/composables/api/useUserApi
