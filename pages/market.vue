<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle :title="$t('market.title')" />
    <p class="text-secondary dark:text-secondary-dark text-lg">
      {{ $t("market.description") }}
    </p>
    <p class="text-secondary dark:text-secondary-dark text-lg pb-8">
      {{ $t("market.content") }}
    </p>
    <div
      class="flex items-center mb-2 text-primary dark:text-primary-dark text-lg"
    >
      <TheIcon
        customClass="text-primary dark:text-primary-dark text-xl mr-4"
        faIcon="fa-solid fa-money-bill"
      />
      <p>{{ $t("market.myGreens") }}</p>
      <p class="ml-2">{{ currentUser.greens }}</p>
    </div>
    <MarketOffers />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "registered",
});
useDefaultHead("TJGoal - Loja");

const { currentUser } = useCurrentUser();
</script>
