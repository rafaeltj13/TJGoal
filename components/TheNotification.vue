<template>
  <div class="fixed bottom-12 right-20 flex flex-col items-center gap-2 z-50">
    <transition-group name="list">
      <div
        v-for="(notification, index) in notifications"
        :key="index + notification.title"
        class="w-[350px] translate-y-[12px] transition-transform duration-300 ease-in-out mx-auto bg-sidebar dark:bg-sidebar-dark dark:border dark:border-primary-dark rounded-2xl"
      >
        <div class="flex flex-col items-start justify-between p-4">
          <div class="flex items-center gap-2">
            <TheIcon
              customClass="text-primary dark:text-primary-dark text-lg"
              :faIcon="`fa-solid fa-circle-${
                notification.type === 'success' ? 'check' : 'xmark'
              }`"
            />
            <p class="text-primary dark:text-primary-dark text-lg">
              {{ notification?.title }}
            </p>
          </div>
          <p class="text-tertiary dark:text-tertiary-dark ml-[1.6rem]">
            {{ notification?.content }}
          </p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
const { notifications } = useNotification();
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
