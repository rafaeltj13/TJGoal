<template>
  <div @click="openModal">
    <slot />
  </div>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog
      as="div"
      @close="closeModal"
      :class="{ dark: darkMode }"
      class="relative z-10"
    >
      <HeadlessTransitionChild
        as="template"
        enter="duration-500 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-400 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-background dark:bg-background-dark dark:border dark:border-primary-dark p-6 text-left align-middle shadow-xl transition-all"
            >
              <slot name="content"></slot>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<script setup>
const darkMode = useDarkMode();
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(props.modelValue || false);

const closeModal = () => {
  isOpen.value = false;
  emit("update:modelValue", isOpen.value);
};
const openModal = () => {
  isOpen.value = true;
  emit("update:modelValue", isOpen.value);
};

watch(
  () => props.modelValue,
  (value) => {
    isOpen.value = value;
  }
);
</script>
