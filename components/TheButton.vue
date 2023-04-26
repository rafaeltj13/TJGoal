<template>
  <button :class="getClass()" :type="type">
    {{ props.content }}
  </button>
</template>

<script setup lang="ts">
type ButtonClassType = "default" | "outlined";
type ButtonType = "button" | "submit" | "reset" | undefined;

const props = defineProps({
  content: {
    type: String,
    default: () => "",
  },
  type: {
    type: String as PropType<ButtonType>,
    default: () => "button",
  },
  classType: {
    type: String as PropType<ButtonClassType>,
    default: () => "default",
  },
});

const getClass = () => {
  switch (props.classType) {
    case "outlined":
      return "text-tertiary dark:text-tertiary-dark hover:text-secondary dark:hover:text-secondary-dark border-2 border-tertiary hover:bg-primary dark:hover:bg-primary-dark focus:ring-2 focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 dark:border-tertiary-dark dark:focus:ring-primary-dark hover:scale-110 transition-all shadow-lg shadow-primary/50 dark:shadow-md dark:shadow-primary-dark/80";
    case "default":
    default:
      return "text-secondary dark:text-secondary-dark bg-gradient-to-r from-primary dark:from-primary-dark to-tertiary dark:to-tertiary-dark hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-primary dark:focus:ring-primary-dark font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 hover:scale-110 transition-all shadow-lg shadow-primary/50 dark:shadow-md dark:shadow-primary-dark/80";
  }
};
</script>
