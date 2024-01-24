<template>
  <div>
    <div class="flex items-center justify-between">
      <p
        class="text-center text-lg font-bold text-primary dark:text-primary-dark"
      >
        {{ $t("vip.title") }}
      </p>
      <h1 :class="`text-2xl font-bold text-${props.vipConfig.color}`">
        {{ $t(`vip.${props.vipConfig.type}`) }}
      </h1>
    </div>
    <div class="flex items-center justify-between mt-4">
      <p
        class="text-center text-md font-bold text-primary dark:text-primary-dark"
      >
        {{ $t("vip.price") }}
      </p>
      <h2
        class="text-xl font-bold text-text dark:text-text-dark flex items-center"
      >
        {{ props.vipConfig.price }}
        <TheIcon
          customClass="text-text dark:text-text-dark cursor-pointer text-xl ml-2"
          faIcon="fa-solid fa-money-bill"
        />
      </h2>
    </div>
    <div class="flex items-center justify-between mt-4">
      <p
        class="text-center text-md font-bold text-primary dark:text-primary-dark"
      >
        {{ $t("vip.durationDays") }}
      </p>
      <h2
        class="text-xl font-bold text-text dark:text-text-dark flex items-center"
      >
        {{ props.vipConfig.durationDays }} {{ $t("vip.days") }}
      </h2>
    </div>
    <p class="text-accent dark:text-accent-dark text-xs text-center my-4">
      {{ $t("vip.description") }}
    </p>
    <div class="flex items-center justify-center gap-8">
      <TheButton
        @click="emit('back')"
        classType="outlined"
        :content="$t('vip.back')"
      />
      <TheButton
        @click="emit('setVip')"
        classType="default"
        :content="$t('vip.buy')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VipObject } from "./types";

const emit = defineEmits(["back", "setVip"]);

const props = defineProps({
  vipConfig: {
    type: Object as PropType<VipObject>,
    required: true,
  },
});
</script>
