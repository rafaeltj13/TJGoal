<template>
  <ScorerBaseList :ranking="currentRanking" />
</template>

<script setup lang="ts">
import { User } from "~/lib/data.types";

const { getUserRank } = useAPI();

const currentRanking = ref<Array<User>>(await getUserRank());
</script>
