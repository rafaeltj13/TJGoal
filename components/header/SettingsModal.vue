<template>
  <TheModal v-model="showModal">
    <template #content>
      <div class="flex flex-col items-center px-2">
        <h1 class="text-primary dark:text-primary-dark text-xl font-bold mb-10">
          {{ $t("settingsModal.title") }}
        </h1>
        <div class="flex items-center justify-between w-full mb-6">
          <p class="text-md text-tertiary dark:text-tertiary-dark">
            {{ $t("settingsModal.theme") }}
          </p>
          <div class="flex items-center gap-4">
            <TheIcon
              fa-icon="fa-solid fa-sun"
              custom-class="text-secondary dark:text-secondary-dark"
            />
            <TheToggle v-model="darkMode" />
            <TheIcon
              fa-icon="fa-solid fa-moon"
              custom-class="text-secondary dark:text-secondary-dark"
            />
          </div>
        </div>
        <div class="flex items-center justify-between w-full mb-6">
          <p class="text-md text-tertiary dark:text-tertiary-dark">
            {{ $t("settingsModal.language") }}
          </p>
          <div class="flex items-center gap-4">
            <p
              class="text-sm text-secondary dark:text-secondary-dark font-bold"
            >
              PT-BR
            </p>
            <TheToggle v-model="isEnglish" />
            <p
              class="text-sm text-secondary dark:text-secondary-dark font-bold w-3"
            >
              EN
            </p>
          </div>
        </div>
        <!-- TODO add sound to the game -->
        <!-- <div class="flex items-center justify-between w-full">
          <p class="text-md text-tertiary dark:text-tertiary-dark">
            {{ $t("settingsModal.sound") }}
          </p>
          <div class="flex items-center pr-7">
            <TheToggle v-model="enableSound" />
          </div>
        </div> -->
      </div>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const darkMode = useDarkMode();
const language = useLanguage();
const isEnglish = ref(language.value === "en-US");
// const enableSound = ref(true);

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

watch(isEnglish, (value) => {
  language.value = value ? "en-US" : "pt-BR";
  locale.value = language.value;
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
