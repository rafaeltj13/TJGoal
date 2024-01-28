<template>
  <HeadlessMenu
    as="div"
    :class="{ dark: darkMode }"
    class="relative inline-block text-left"
  >
    <HeadlessMenuButton> <slot /> </HeadlessMenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessMenuItems
        :class="{ dark: darkMode }"
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-accent rounded-lg bg-background shadow-xl dark:border dark:border-primary-dark ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div v-for="section of props.sections" class="px-1 py-1">
          <HeadlessMenuItem v-for="option of section">
            <button
              @click="() => option.onClick()"
              class="group flex w-full items-center justify- rounded-md px-2 py-2 text-xs text-secondary hover:bg-secondary hover:dark:bg-secondary-dark hover:text-tertiary hover:dark:text-tertiary-dark"
            >
              <TheIcon :fa-icon="option.icon" custom-class="w-4" />
              <span class="ml-4">
                {{ option.text }}
              </span>
            </button>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>

<script setup lang="ts">
type Option = {
  icon: string;
  text: string;
  onClick: () => void;
};

const darkMode = useDarkMode();
const props = defineProps({
  sections: {
    type: Array<Array<Option>>,
    required: true,
  },
});
</script>
