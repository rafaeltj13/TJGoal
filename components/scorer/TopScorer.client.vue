<template>
  <ScorerBaseList :ranking="currentRank" />
</template>

<script setup lang="ts">
const { getUserRank } = useAPI();
const { currentUser } = useCurrentUser();

const currentRank = ref();

watch(
  () => currentUser.value,
  async () => {
    if (!currentRank || !currentRank.length) {
      currentRank.value = await getUserRank(currentUser.value?.id || null);
    }
  }
);
</script>
