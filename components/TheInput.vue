<template>
  <input
    :value="modelValue"
    @input="updateValue"
    :type="type"
    :placeholder="props.placeholder"
    class="bg-background dark:bg-background-dark placeholder:text-text dark:placeholder:text-text-dark text-text dark:text-text-dark block mb-2 text-sm font-medium w-full rounded-lg p-3 h-10 border border-secondary dark:border-secondary-dark focus:ring-1 focus:outline-none focus:ring-primary dark:focus:ring-primary-dark"
  />
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: () => "text",
  },
});
const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
