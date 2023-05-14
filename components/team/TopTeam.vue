<template>
  <TeamBaseList :ranking="currentRanking" />
</template>

<script setup lang="ts">
import { Team } from "~/lib/data.types";

const { getTeamRank } = useAPI();

const currentRanking = ref<Array<Team>>(await getTeamRank());
</script>
