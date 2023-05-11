<template>
  <ScorerBaseList :ranking="currentRank" />
</template>

<script setup lang="ts">
import { User } from "~/lib/data.types";

const { getUserRank } = useAPI();

const currentRank = ref<Array<User>>(await getUserRank());
</script>
