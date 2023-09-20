<template>
  <TheModal v-model="showModal">
    <template #default>
      <TheIcon
        fa-icon="fa-solid fa-right-from-bracket"
        custom-class="text-accent dark:text-accent-dark hover:scale-125 transition-transform cursor-pointer text-lg"
      />
    </template>
    <template #content>
      <div class="flex justify-center flex-col items-center">
        <p class="text-2xl text-text dark:text-text-dark font-bold mb-8">
          Você deseja sair do TJGOAL?
        </p>
        <div class="flex justify-between w-60 items-center">
          <TheButton content="Não" @click="closeModal()" />
          <TheButton
            classType="outlined"
            content="Sim, sair"
            @click="signout()"
          />
        </div>
      </div>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const showModal = ref(false);

const signout = async () => {
  await supabase.auth.signOut();
  showModal.value = false;
  navigateTo("/");
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
