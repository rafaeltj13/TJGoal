<template>
  <div
    v-if="user && user.id"
    :class="{ 'w-48': openRightSidebar, 'w-16': !openRightSidebar }"
    class="transition-all duration-150 ease-in-out fixed top-16 right-0 h-full flex flex-col bg-sidebar dark:bg-sidebar-dark shadow-lg justify-between items-center"
  >
    <div class="p-4 px-2 w-full">
      <div
        class="rounded-xl bg-gray-300 border-primary dark:border-primary-dark border-2 w-10 h-10 flex items-center justify-center mb-2 mx-auto"
      >
        <TheIcon
          customClass="text-slate-400 text-2xl"
          faIcon="fa-solid fa-hammer"
        />
      </div>
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full"
      />
      <ShootList />
      <hr
        class="bg-primary dark:bg-primary-dark border border-primary dark:border-primary-dark rounded-full"
      />
    </div>
    <TheIcon
      v-if="!openRightSidebar"
      customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
      faIcon="fa-solid fa-angles-left"
      @click="openRightSidebar = !openRightSidebar"
    />
    <TheIcon
      v-else
      customClass="pb-20 text-primary dark:text-primary-dark group-hover:text-secondary cursor-pointer"
      faIcon="fa-solid fa-angles-right"
      @click="openRightSidebar = !openRightSidebar"
    />
  </div>
</template>

<script setup lang="ts">
import { User } from "@supabase/gotrue-js";

const openRightSidebar = useRightSidebar();
const supabase = useSupabaseClient();

let user: Ref<User | null> = ref(null);

supabase.auth.onAuthStateChange((event, session) => {
  user.value = session?.user ?? null;
});
</script>
