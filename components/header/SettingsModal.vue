<template>
  <TheModal v-model="showModal">
    <template #content>
      <div class="flex flex-col items-center">
        <h1 class="text-primary dark:text-primary-dark text-xl font-bold mb-10">
          Configurações
        </h1>
        <div class="flex items-center justify-between w-full">
          <p class="text-md text-text dark:text-text-dark">Tema</p>
          <div class="flex items-center gap-4">
            <TheIcon
              fa-icon="fa-solid fa-sun"
              custom-class="text-accent dark:text-accent-dark"
            />
            <TheToggle v-model="darkMode" />
            <TheIcon
              fa-icon="fa-solid fa-moon"
              custom-class="text-accent dark:text-accent-dark"
            />
          </div>
        </div>
      </div>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const darkMode = useDarkMode();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => false,
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
