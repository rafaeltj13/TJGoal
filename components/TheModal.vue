<template>
  <div @click="openDialog = true">
    <slot />
  </div>
  <div
    v-if="openDialog"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-2xl bg-secondary dark:bg-secondary-dark text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <ClientOnly>
            <font-awesome-icon
              class="absolute text-primary dark:text-primary-dark hover:scale-110 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
              icon="fa-solid fa-close"
              @click="() => (openDialog = false)"
            />
          </ClientOnly>
          <div
            class="bg-secondary dark:bg-secondary-dark px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
          >
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const openDialog = ref(false);
</script>
