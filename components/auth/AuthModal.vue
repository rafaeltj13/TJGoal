<template>
  <TheModal v-model="showModal">
    <template #default>
      <div class="flex items-center w-8 h-8">
        <TheIcon
          customClass="text-accent dark:text-accent-dark hover:scale-125 transition-transform cursor-pointer text-lg"
          faIcon="fa-solid fa-right-to-bracket"
        />
      </div>
    </template>
    <template #content>
      <ClientOnly>
        <Transition mode="out-in" name="fade">
          <AuthSignIn
            v-if="currentTab === 'signin'"
            @signup="currentTab = 'signup'"
          />
          <AuthSignUp v-else @back="currentTab = 'signin'" />
        </Transition>
      </ClientOnly>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const currentTab = ref("signin");
const showModal = ref(false);
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
