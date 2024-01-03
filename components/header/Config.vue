<template>
  <TheMenu :sections="sections">
    <template #default>
      <div class="w-8 h-8 flex items-center justify-center">
        <TheIcon
          fa-icon="fa-solid fa-ellipsis-vertical"
          custom-class="text-accent dark:text-accent-dark hover:scale-125 transition-transform cursor-pointer text-lg"
        />
      </div>
    </template>
  </TheMenu>
  <HeaderSettingsModal v-model="showSettings" />
</template>

<script setup>
const showSettings = ref(false);
const { t } = useI18n();

const { currentUser } = useCurrentUser();

const signout = async () => {
  await supabase.auth.signOut();
  await navigateTo("/");
};

const playerOptions = computed(() => [
  {
    icon: "fa-solid fa-id-badge",
    text: t("config.profile"),
    onClick: () => navigateTo(`/profile/${currentUser.value.id}`),
  },
  {
    icon: "fa-solid fa-people-group",
    text: t("config.team"),
    onClick: () => navigateTo(`/team/${currentUser.value.team.id}`),
  },
]);
const gameOptions = computed(() => [
  {
    icon: "fa-solid fa-cog",
    text: t("config.settings"),
    onClick: () => (showSettings.value = true),
  },
]);
const signOutOption = computed(() => [
  {
    icon: "fa-solid fa-right-from-bracket",
    text: t("config.signOut"),
    onClick: signout,
  },
]);

const sections = computed(() => {
  const sections = [gameOptions.value];

  if (currentUser.value.id) {
    sections.push(playerOptions.value);
    sections.push(signOutOption.value);
  }

  return sections;
});
</script>
