<template>
  <div class="flex md:flex-row flex-col items-center justify-between pt-12">
    <MarketOfferItem
      icon="fa-solid fa-coins"
      :description="$t('market.50')"
      price="$ 9,90"
      @click="openStripeLink('https://buy.stripe.com/test_dR62bv9Gi40mgYEbII')"
    />
    <MarketOfferItem
      icon="fa-solid fa-money-bills"
      :description="$t('market.100')"
      price="$ 14,90"
      @click="openStripeLink('https://buy.stripe.com/test_4gwbM5g4GfJ423K145')"
    />
    <MarketOfferItem
      icon="fa-solid fa-sack-dollar"
      :description="$t('market.250')"
      price="$ 25,90"
      @click="openStripeLink('https://buy.stripe.com/test_dR66rLf0C1Se23K146')"
    />
  </div>
</template>

<script setup lang="ts">
const { currentUser } = useCurrentUser();

const openStripeLink = (url: string) => {
  window.open(url + `?client_reference_id=${currentUser.value.id}`);
};
</script>
