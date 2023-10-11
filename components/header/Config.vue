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

const signout = async () => {
  await supabase.auth.signOut();
  navigateTo("/");
};

const sections = ref([
  [
    { icon: "fa-solid fa-id-badge", text: "Meu perfil", onClick: () => ({}) },
    { icon: "fa-solid fa-people-group", text: "Meu time", onClick: () => ({}) },
  ],
  [
    { icon: "fa-solid fa-sun", text: "Modo claro", onClick: () => ({}) },
    { icon: "fa-solid fa-globe", text: "Idioma", onClick: () => ({}) },
  ],
  [
    {
      icon: "fa-solid fa-right-from-bracket",
      text: "Sair",
      onClick: signout,
    },
  ],
]);
</script>
