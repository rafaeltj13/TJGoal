<template>
  <ScorerBaseList :ranking="currentRank" />
</template>

<script setup lang="ts">
import { User } from "~/lib/data.types";

const { getUserRank } = useAPI();
const { currentUser } = useCurrentUser();

const currentRank = ref<Array<User>>([]);

watch(
  () => currentUser.value,
  async () => {
    if (!currentRank || !currentRank.value.length) {
      currentRank.value = await getUserRank(currentUser.value?.id || null);
    }
  }
);
</script>
