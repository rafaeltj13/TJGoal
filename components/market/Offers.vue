<template>
  <div class="flex md:flex-row flex-col items-center justify-between pt-12">
    <MarketOfferItem
      icon="fa-solid fa-coins"
      description="50 verdinhos"
      price="$ 9,90"
      @click="openStripeLink('https://buy.stripe.com/test_dR62bv9Gi40mgYEbII')"
    />
    <MarketOfferItem
      icon="fa-solid fa-money-bills"
      description="100 verdinhos"
      price="$ 14,90"
      @click="openStripeLink('https://buy.stripe.com/test_4gwbM5g4GfJ423K145')"
    />
    <MarketOfferItem
      icon="fa-solid fa-sack-dollar"
      description="250 verdinhos"
      price="$ 25,90"
      @click="openStripeLink('https://buy.stripe.com/test_dR66rLf0C1Se23K146')"
    />
  </div>
</template>

<script setup lang="ts">
const { currentUser } = useCurrentUser();

const openStripeLink = (url: string) => {
  console.log(currentUser.value.id);
  window.open(url + `?client_reference_id=${currentUser.value.id}`);
};
</script>
