<template>
  <div class="p-8 max-w-[800px] mx-auto min-h-[100vh]">
    <ThePageTitle title="Loja" />
    <p class="text-secondary dark:text-secondary-dark text-lg">
      Procurando por um verdinho? Você está no lugar certo...
    </p>
    <p class="text-secondary dark:text-secondary-dark text-lg pb-8">
      Na nossa loja, temos uma variedade de verdinho para você escolher!
    </p>
    <div
      class="flex items-center mb-2 text-primary dark:text-primary-dark text-lg"
    >
      <TheIcon
        customClass="text-primary dark:text-primary-dark text-xl mr-4"
        faIcon="fa-solid fa-money-bill"
      />
      <p class="">Meus verdinhos:</p>
      <p class="ml-4">750</p>
    </div>
    <MarketOffers />
  </div>
</template>

<script setup lang="ts">
useDefaultHead("TJGoal - Loja");
</script>
