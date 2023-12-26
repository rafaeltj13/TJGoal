<template>
  <TheMenu :sections="sections">
    <template #default>
      <div class="w-8 h-8 flex items-center justify-center">
        <TheIcon
          fa-icon="fa-solid fa-ellipsis-vertical"
          custom-class="text-accent dark:text-accent-dark hover:scale-125 transition-transform cursor-pointer text-lg"
        />
      </div>
    </template>
  </TheMenu>
</template>

<script setup>
const supabase = useSupabaseClient();
const darkMode = useDarkMode();

const { currentUser } = useCurrentUser();

const signout = async () => {
  await supabase.auth.signOut();
  await navigateTo("/");
};

const sections = computed(
  () => [
    [
      {
        icon: "fa-solid fa-id-badge",
        text: "Meu perfil",
        onClick: () => navigateTo(`/profile/${currentUser.value.id}`),
      },
      {
        icon: "fa-solid fa-people-group",
        text: "Meu time",
        onClick: () => navigateTo(`/team/${currentUser.value.team.id}`),
      },
    ],
    [
      // TODO VER PQ NÃO ATUALIZA O NOME
      {
        icon: `fa-solid fa-${!darkMode ? "sun" : "moon"}`,
        text: `Modo ${!darkMode ? "claro" : "escuro"}`,
        onClick: () => {
          darkMode.value = !darkMode.value;
        },
      },
      { icon: "fa-solid fa-cog", text: "Configurações", onClick: () => ({}) },
    ],
    [
      {
        icon: "fa-solid fa-right-from-bracket",
        text: "Sair",
        onClick: signout,
      },
    ],
  ],
  { deep: true }
);
</script>
