<template>
  <form class="flex flex-col items-center py-2">
    <p class="text-2xl text-primary dark:text-primary-dark font-bold mb-8">
      {{ $t("signIn.title") }}
    </p>
    <TheInput v-model="email" :placeholder="$t('signUp.email')" class="mb-4" />
    <TheInput
      v-model="pass"
      :placeholder="$t('signUp.password')"
      type="password"
      class="mb-4"
    />
    <TheInput
      v-model="confirmPass"
      :placeholder="$t('signUp.confirmPassword')"
      type="password"
    />
    <div class="flex gap-4 mt-8">
      <TheButton
        :content="$t('signUp.back')"
        classType="outlined"
        @click="emit('back')"
      />
      <TheButton :content="$t('signUp.register')" @click="signup" />
    </div>
  </form>
</template>

<script setup lang="ts">
const { t } = useI18n();

import { useSupabase } from "~/composables/api/useSupabase";

const emit = defineEmits(["back"]);

const email = ref("");
const pass = ref("");
const confirmPass = ref("");

const supabase = useSupabase();
const { setNotification } = useNotification();

const signup = async () => {
  if (pass.value !== confirmPass.value) {
    setNotification({
      title: t("notification.confirmPasswordError"),
      content: t("notification.confirmPasswordErrorDescription"),
      type: "error",
    });
    return;
  }

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: pass.value,
  });

  if (error) {
    setNotification({
      title: t("notification.signUpError"),
      content: error.message,
      type: "error",
    });
  } else {
    emit("back");
  }
};
</script>
