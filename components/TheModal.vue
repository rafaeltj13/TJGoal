<template>
  <div @click="toggle(true)">
    <slot />
  </div>
  <div
    v-show="openDialog"
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
        :class="{
          '!opacity-100 !scale-100': displayModal,
        }"
        class="transition-all opacity-0 scale-0 duration-300 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative overflow-hidden rounded-2xl bg-background dark:bg-background-dark shadow-xl sm:my-8 sm:w-full sm:max-w-lg dark:border-2 dark:border-primary-dark"
        >
          <TheIcon
            customClass="absolute text-primary dark:text-primary-dark hover:scale-110 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
            faIcon="fa-solid fa-close"
            @click="() => toggle(false)"
          />
          <div
            class="bg-background dark:bg-background-dark px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
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
const displayModal = ref(false);

const toggle = (value: boolean) => {
  openDialog.value = value;

  setTimeout(() => {
    displayModal.value = value;
  }, 100);
};

onMounted(() => {
  window.onkeydown = function (event) {
    if (event.key === "Escape") {
      toggle(false);
    }
  };
});
</script>
