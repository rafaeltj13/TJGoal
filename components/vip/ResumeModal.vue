<template>
  <TheModal v-model="showModal">
    <template #default>
      <div class="w-full flex items-center justify-center mt-4">
        <TheButton
          classType="default"
          class="w-full md:w-[60%] !m-0"
          :content="$t('vip.title')"
        />
      </div>
    </template>
    <template #content>
      <ClientOnly>
        <Transition mode="out-in" name="fade">
          <div v-if="!selectedVip.title">
            <div class="flex items-center justify-between mb-4">
              <p
                class="text-center text-lg font-bold text-primary dark:text-primary-dark"
              >
                VIP Status
              </p>
              <h1 class="text-2xl font-bold text-indigo-800">Mítico</h1>
            </div>
            <div class="flex items-center justify-between">
              <VipItem type="normal" @display-details="handleDetails" />
              <VipItem type="star" @display-details="handleDetails" />
              <VipItem type="mythical" @display-details="handleDetails" />
            </div>
          </div>
          <VipDetails v-else @back="selectedVip = {}" />
        </Transition>
      </ClientOnly>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
import type { VipObject } from "./types";

const showModal = ref(false);

const selectedVip = ref<VipObject>({});

const handleDetails = (vip: VipObject) => {
  selectedVip.value = vip;
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
