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
          <div v-if="!selectedVip.title">
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
              <h2 class="text-lg font-bold text-text dark:text-text-dark">
                {{ currentUser.vip?.until }}
              </h2>
            </div>
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

const selectedVip = ref<VipObject>({});

const handleDetails = (vip: VipObject) => {
  selectedVip.value = vip;
};

const handleVip = async () => {
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
  } catch (error) {
    setNotification({
      title: "Opa!",
      content: "Algo deu errado",
      type: "error",
    });
  } finally {
    selectedVip.value = {};
  }
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
