<template>
  <div
    :class="{
      '-translate-x-52 opacity-100 z-50':
        notification && notification.title && openRightSidebar,
      '-translate-x-24 opacity-100':
        notification && notification.title && !openRightSidebar,
    }"
    class="w-[350px] fixed bottom-5 opacity-0 transition-all duration-300 right-0 mx-auto bg-sidebar dark:bg-sidebar-dark border border-primary dark:border-primary shadow-xl rounded-2xl"
  >
    <div class="flex items-center justify-between p-4">
      <div>
        <p class="text-primary dark:text-primary-dark">
          {{ notification?.title }}
        </p>
        <p class="text-text dark:text-text-dark">
          {{ notification?.content }}
        </p>
      </div>
      <TheIcon
        customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
        faIcon="fa-solid fa-close"
        @click="() => setNotification(null)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { notification, setNotification } = useNotification();
const displayNotification = ref(false);
const openRightSidebar = useRightSidebar();

watch(notification, () => {
  displayNotification.value = !!notification.value?.title;
});
</script>
