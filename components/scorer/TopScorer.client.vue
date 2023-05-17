<template>
  <div
    class="w-96 bg-background border-background dark:bg-background-dark shadow-xl border-2 dark:border-primary-dark rounded-xl p-4"
  >
    <div>
      <h1
        class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
      >
        Artilharia
      </h1>
      <div v-if="pending">loading...</div>
      <ScorerListItem
        v-else-if="data"
        v-for="(user, index) of currentRanking"
        :user="user"
        :key="user.id"
        class="py-2"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "~/lib/data.types";

const { data, pending } = await useFetch(`/api/user/ranking`);
const currentRanking = computed<Array<User>>(() => data.value as User[]);
</script>
