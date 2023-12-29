<template>
  <HeadlessSwitch
    v-model="enabled"
    :class="
      enabled ? ' bg-primary dark:bg-primary-dark' : 'bg-text dark:bg-text-dark'
    "
    class="relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
  >
    <span
      aria-hidden="true"
      :class="enabled ? 'translate-x-6' : 'translate-x-0'"
      class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-background dark:bg-background-dark shadow-lg ring-0 transition duration-200 ease-in-out"
    />
  </HeadlessSwitch>
</template>

<script setup lang="ts">
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

const enabled = ref(props.modelValue);

watch(enabled, (value) => {
  updateValue(value);
});
</script>
