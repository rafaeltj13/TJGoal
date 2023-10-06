<template>
  <div class="">
    <HeadlessPopover v-slot="{ open }" class="relative">
      <HeadlessPopoverButton class="">
        <slot />
      </HeadlessPopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <HeadlessPopoverPanel
          class="absolute -left-9 z-10 mt-3 -translate-x-1/2 transform bg-background dark:bg-background-dark rounded-2xl"
        >
          <div class="p-2">
            <slot name="content"></slot>
          </div>
        </HeadlessPopoverPanel>
      </transition>
    </HeadlessPopover>
  </div>
</template>

<script setup></script>
