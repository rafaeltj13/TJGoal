<template>
  <TheModal v-model="showModal">
    <template #default>
      <div class="w-full flex items-center justify-center mt-4">
        <TheButton
          classType="default"
          class="w-full !m-0"
          :class="{ '!px-2': !openRightSidebar }"
          :content="$t('vip.title')"
        />
      </div>
    </template>
    <template #content>
      <ClientOnly>
        <Transition mode="out-in" name="fade">
          <div
            v-if="loadingPurchase"
            class="w-full h-[264px] flex items-center justify-center"
          >
            <TheLoadingSpinner />
          </div>
          <div v-else-if="!selectedVip.title">
            <div v-if="currentUser.vip?.id">
              <div class="flex items-center justify-between">
                <p
                  class="text-center text-xl font-bold text-primary dark:text-primary-dark"
                >
                  {{ $t("vip.status") }}
                </p>
                <h1
                  class="text-2xl font-bold"
                  :class="{
                    'text-orange-800': currentUser.vip?.type === 'normal',
                    'text-emerald-800': currentUser.vip?.type === 'star',
                    'text-indigo-800': currentUser.vip?.type === 'mythical',
                  }"
                >
                  {{ $t(`vip.${currentUser.vip?.type}`) }}
                </h1>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p
                  class="text-center text-md font-bold text-primary dark:text-primary-dark"
                >
                  {{ $t("vip.duration") }}
                </p>
                <h2
                  class="text-lg font-bold text-tertiary dark:text-tertiary-dark"
                >
                  {{ currentUser.vip?.until }}
                </h2>
              </div>
            </div>
            <h1
              v-else
              class="text-2xl text-center text-primary dark:text-primary-dark"
            >
              {{ $t("vip.getVip") }}
            </h1>
            <div class="flex items-center justify-between mt-4">
              <VipItem type="normal" @display-details="handleDetails" />
              <VipItem type="star" @display-details="handleDetails" />
              <VipItem type="mythical" @display-details="handleDetails" />
            </div>
          </div>
          <VipDetails
            v-else
            @back="selectedVip = {}"
            @set-vip="handleVip"
            :vip-config="selectedVip"
          />
        </Transition>
      </ClientOnly>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
import { useUserApi } from "~/composables/api/useUser";
import type { VipObject } from "./types";
const openRightSidebar = useRightSidebar();

const { setNotification } = useNotification();
const { currentUser, setCurrentUser } = useCurrentUser();
const showModal = ref(false);
const loadingPurchase = ref(false);

const selectedVip = ref<VipObject>({});

const handleDetails = (vip: VipObject) => {
  selectedVip.value = vip;
};

const handleVip = async () => {
  if (
    selectedVip.value.price &&
    currentUser.value.greens < selectedVip.value.price
  ) {
    setNotification({
      title: "Opa!",
      content: "Você não tem greens suficientes",
      type: "error",
    });
    return;
  }

  loadingPurchase.value = true;
  try {
    await useUserApi().updateUserVip(currentUser.value.id, selectedVip.value);
    const userResponse = await useUserApi().getUser(currentUser.value.id);
    setCurrentUser(userResponse);
    showModal.value = false;
    setNotification({
      title: "Nice!",
      content: "Vip adicionado com sucesso",
      type: "success",
    });
    selectedVip.value = {};
  } catch (error) {
    setNotification({
      title: "Opa!",
      content: "Algo deu errado",
      type: "error",
    });
  } finally {
    loadingPurchase.value = true;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
