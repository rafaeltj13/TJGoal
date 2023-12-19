<template>
  <div
    :class="{ 'opacity-90': !isScrollAtTop }"
    class="transition-opacity shadow-xl w-[100vw] h-16 bg-gradient-to-t from-primary dark:from-primary-dark to-secondary dark:to-secondary-dark py-4 px-6 flex justify-between items-center fixed z-20"
  >
    <NuxtLink
      class="text-background dark:text-background-dark text-3xl h-7 hover:scale-125 transition-transform cursor-pointer"
      to="/"
      >TJ-GOAL</NuxtLink
    >
    <div class="flex items-center">
      <ClientOnly class="flex items-center">
        <AuthModal v-if="!currentUser.id" />
        <div v-else class="flex items-center gap-2">
          <div class="flex items-center">
            <p class="text-accent dark:text-accent-dark font-bold mr-2 text-xl">
              {{ currentUser.greens }}
            </p>
            <TheIcon
              customClass="text-accent dark:text-accent-dark hover:scale-125 transition-transform cursor-pointer text-xl"
              faIcon="fa-solid fa-money-bill"
              @click="navigateTo('/market')"
            />
          </div>
          <HeaderConfig />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentUser } = useCurrentUser();
const isScrollAtTop = ref(true);

const handleScroll = () => {
  isScrollAtTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
