<template>
  <TheModal>
    <template #default>
      <TheIcon
        customClass="pt-1 text-secondary dark:text-secondary-dark hover:scale-110 transition-transform cursor-pointer text-lg"
        faIcon="fa-solid fa-right-to-bracket"
      />
    </template>
    <template #content>
      <form
        @submit.prevent="emailSignIn()"
        class="flex flex-col items-center py-8"
      >
        <p class="text-2xl text-primary dark:text-primary-dark font-bold mb-8">
          Sign in
        </p>
        <TheInput v-model="login" placeholder="Email" class="mb-4" />
        <TheInput
          v-model="pass"
          placeholder="Password"
          type="password"
          class="mb-8"
        />
        <div class="flex gap-4">
          <TheButton content="Criar conta" classType="outlined" />
          <TheButton content="Entrar" type="submit" />
        </div>
        <div class="flex gap-4">
          <p @click="googleSignIn">google</p>
          <!-- <TheIcon
            fa-icon="fab google"
            customClass="w-8 p-4 text-xl text-primary dark:text-primary-dark group-hover:text-secondary dark:group-hover:text-secondary-dark cursor-pointer"
          /> -->
        </div>
      </form>
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const login = ref("");
const pass = ref("");

const emailSignIn = () => {
  // TODO Implement email sign in
};

const googleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};
</script>
