<template>
  <form @submit.prevent="emailSignIn()" class="flex flex-col items-center py-2">
    <p class="text-2xl text-tertiary dark:text-tertiary-dark font-bold mb-8">
      {{ $t("signIn.title") }}
    </p>
    <TheInput v-model="login" :placeholder="$t('signIn.email')" class="mb-4" />
    <TheInput
      v-model="pass"
      :placeholder="$t('signIn.password')"
      type="password"
      class="mb-8"
    />
    <div class="flex gap-4">
      <TheButton
        content="Criar conta"
        classType="outlined"
        @click="emit('signup')"
      />
      <TheButton content="Entrar" type="submit" @click.once="emailSignIn()" />
    </div>
    <div class="mt-8">
      <h1 class="text-lg text-tertiary dark:text-tertiary-dark">
        {{ $t("signIn.or") }}
      </h1>
      <div class="flex items-centes justify-center mt-4">
        <div
          @click="googleSignIn"
          class="w-10 h-10 group hover:bg-primary group-hover:dark:bg-primary-dark rounded-full cursor-pointer flex items-center justify-center"
        >
          <TheIcon
            fa-icon="fa-brands fa-google"
            custom-class="text-xl text-primary dark:text-primary-dark group-hover:text-background dark:group-hover:text-background-dark cursor-pointer"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const { t } = useI18n();

const emit = defineEmits(["signup"]);

const supabase = useSupabaseClient();
const { setNotification } = useNotification();

const login = ref("");
const pass = ref("");

const emailSignIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: login.value,
    password: pass.value,
  });

  if (error) {
    setNotification({
      title: t("notification.signInError"),
      content: error.message,
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
