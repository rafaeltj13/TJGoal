<template>
  <TheModal v-model="showModal">
    <template #content>
      <div>{{ props.shootType }}</div>
      colocar o titulo ne colocar os attributos que cada chute se prioriza
      colocar as opções de chutar não colocar botão pra sair ver se rola deixar
      o modal fixo
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => false,
  },
  shootType: {
    type: String as PropType<"default" | "penalty" | "fault" | "counterAttack">,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const updateValue = (value: boolean) => {
  emit("update:modelValue", value);
};

const showModal = ref(props.modelValue);

watch(
  () => props.modelValue,
  (value) => {
    showModal.value = value;
  }
);

watch(showModal, (value) => {
  updateValue(value);
});
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
