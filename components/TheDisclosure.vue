<template>
  <HeadlessDisclosure
    :key="title"
    as="div"
    class="w-full bg-background dark:bg-background-dark dark:border dark:border-primary-dark shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl"
    v-slot="{ open }"
  >
    <HeadlessDisclosureButton
      class="flex w-full items-center justify-between rounded-xl bg-background dark:bg-background-dark dark:border-primary-dark p-4 text-left text-md font-medium text-text dark:text-text-dark hover:bg-secondary hover:dark:bg-secondary-dark"
    >
      <p class="text-text dark:text-text-dark">
        {{ props.title }}
      </p>
      <TheIcon
        customClass="text-accent dark:text-accent-dark text-md"
        :faIcon="`fa-solid fa-chevron-${open ? 'up' : 'down'}`"
      />
    </HeadlessDisclosureButton>
    <HeadlessDisclosurePanel class="p-4 text-sm text-text dark:text-text-dark">
      <slot />
    </HeadlessDisclosurePanel>
  </HeadlessDisclosure>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
