<template>
  <div
    class="w-96 bg-background dark:bg-background-dark shadow-2xl rounded-xl p-4"
  >
    <div>
      <h1
        class="text-primary dark:text-primary-dark text-center text-2xl pb-4 font-bold"
      >
        Artilharia
      </h1>
      <ScorerListItem
        v-for="user of props.ranking"
        :user="user"
        :key="user.id"
        class="py-2"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { User } from "~/lib/data.types";
const props = defineProps({
  ranking: {
    type: Array<User>,
    required: true,
  },
});
</script>
