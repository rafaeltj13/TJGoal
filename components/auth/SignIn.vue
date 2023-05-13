<template>
  <form @submit.prevent="emailSignIn()" class="flex flex-col items-center py-8">
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
      <TheButton
        content="Criar conta"
        classType="outlined"
        @click="emit('signup')"
      />
      <TheButton content="Entrar" type="submit" />
    </div>
    <div class="mt-8">
      <h1 class="text-lg text-text dark:text-text-dark">Or sign in with</h1>
      <div class="flex items-centes justify-center mt-4">
        <div
          @click="googleSignIn"
          class="w-10 h-10 group hover:bg-primary group-hover:dark:bg-primary-dark rounded-full cursor-pointer flex items-center justify-center"
        >
          <TheIcon
            fa-icon="fa-brands fa-google"
            custom-class="w-8 h-8 text-xl text-primary dark:text-primary-dark group-hover:text-background dark:group-hover:text-background-dark cursor-pointer"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["signup"]);

const supabase = useSupabaseClient();

const login = ref("");
const pass = ref("");

const emailSignIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: login.value,
    password: pass.value,
  });

  if (error) {
    ElNotification({
      title: "Erro",
      message: error.message,
      type: "error",
    });
  }
};

const googleSignIn = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};
</script>
