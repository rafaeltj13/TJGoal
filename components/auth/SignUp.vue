<template>
  <form class="flex flex-col items-center py-8">
    <p class="text-2xl text-primary dark:text-primary-dark font-bold mb-8">
      Sign up
    </p>
    <TheInput v-model="email" placeholder="Email" class="mb-4" />
    <TheInput
      v-model="pass"
      placeholder="Password"
      type="password"
      class="mb-4"
    />
    <TheInput
      v-model="confirmPass"
      placeholder="Confirm Password"
      type="password"
    />
    <div class="flex gap-4 mt-8">
      <TheButton content="Voltar" classType="outlined" @click="emit('back')" />
      <TheButton content="Registrar" @click="signup" />
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["back"]);

const email = ref("");
const pass = ref("");
const confirmPass = ref("");

const supabase = useSupabaseClient();
const { setNotification } = useNotification();

const signup = async () => {
  if (pass.value !== confirmPass.value) {
    setNotification({
      title: "Erro",
      content: "Passwords diferentes",
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
      title: "Erro",
      content: error.message,
      type: "error",
    });
  } else {
    emit("back");
  }
};
</script>
