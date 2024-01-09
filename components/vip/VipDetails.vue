<template>
  <p>Esse vip ser'a somado ao tempo de dura'c~ao atual</p>
  <div class="flex items-center justify-center gap-8">
    <TheButton @click="emit('back')" classType="outlined" content="Voltar" />
    <TheButton classType="default" content="Comprar" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["back"]);
</script>
