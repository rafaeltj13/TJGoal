<template>
  <button :class="getClass()" :type="type">
    <label :for="props.for" class="cursor-pointer">
      {{ props.content }}
    </label>
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
  for: {
    type: String,
    default: () => "",
  },
});

const getClass = () => {
  switch (props.classType) {
    case "outlined":
      return "text-tertiary dark:text-tertiary-dark hover:text-background dark:hover:text-background-dark border-2 border-secondary hover:bg-secondary dark:hover:bg-secondary-dark focus:ring-1 focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center dark:border-secondary-dark dark:focus:ring-primary-dark hover:scale-125 transition-all shadow-md dark:shadow-none shadow-text/50 cursor-pointer";
    case "default":
    default:
      return "text-background dark:text-background-dark bg-gradient-to-r from-primary dark:from-primary-dark to-secondary dark:to-secondary-dark hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-primary dark:focus:ring-primary-dark font-medium rounded-lg text-md px-5 py-2.5 text-center hover:scale-125 transition-all shadow-md dark:shadow-none shadow-text/50 cursor-pointer";
  }
};
</script>
