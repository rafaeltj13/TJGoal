<template>
  <div
    class="p-8 max-w-[800px] mx-auto min-h-[100vh] text-primary dark:text-primary-dark"
  >
    PROFILE PAGE
  </div>
</template>
<script setup lang="ts">
import { useUserApi } from "~/composables/api/useUserApi";

const { getUser } = useUserApi();
const route = useRoute();

const user = await getUser((route.params?.id as string) || "");

useDefaultHead(user?.username || "");
</script>
