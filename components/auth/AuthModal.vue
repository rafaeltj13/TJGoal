<template>
  <TheModal>
    <template #default>
      <TheIcon
        customClass="pt-1 text-background dark:text-background-dark hover:scale-110 transition-transform cursor-pointer text-lg"
        faIcon="fa-solid fa-right-to-bracket"
      />
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
