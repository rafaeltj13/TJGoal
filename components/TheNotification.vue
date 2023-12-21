<template>
  <div class="fixed bottom-12 right-20 flex flex-col items-center gap-2">
    <transition-group name="list">
      <div
        v-for="(notification, index) in notifications"
        :key="index + notification.title"
        class="w-[350px] translate-y-[12px] transition-transform duration-300 ease-in-out mx-auto bg-sidebar dark:bg-sidebar-dark dark:border dark:border-primary-dark shadow-lg rounded-2xl"
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
