<template>
  <div>
    <div class="flex items-center justify-between">
      <p
        class="text-center text-lg font-bold text-primary dark:text-primary-dark"
      >
        VIP
      </p>
      <h1
        :class="`text-2xl font-bold text-${props.vipConfig.color} capitalize`"
      >
        {{ props.vipConfig.type }}
      </h1>
    </div>
    <div class="flex items-center justify-between mt-4">
      <p
        class="text-center text-md font-bold text-primary dark:text-primary-dark"
      >
        Price
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
        Duration
      </p>
      <h2
        class="text-xl font-bold text-text dark:text-text-dark flex items-center"
      >
        {{ props.vipConfig.durationDays }} days
      </h2>
    </div>
    <p class="text-accent dark:text-accent-dark text-xs text-center my-4">
      Qualquer compra será somada ao tempo de duração atual do seu VIP
    </p>
    <div class="flex items-center justify-center gap-8">
      <TheButton @click="emit('back')" classType="outlined" content="Voltar" />
      <TheButton @click="" classType="default" content="Comprar" />
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
