<template>
  <ShootOption title="Chutar" @shoot="handleShoot" />
  <ShootOption title="Cobrar Pênalti" @shoot="handleShoot" />
</template>
<script setup lang="ts">
const { currentUser, setCurrentUser } = useCurrentUser();
const { shoot, handleNextLevel, getCurrentUser } = useAPI();

const handleShoot = async () => {
  await shoot(currentUser.value.id, currentUser.value.goals);
  currentUser.value.goals = currentUser.value.goals + 1;

  ElNotification({
    title: "Chute.....",
    message: "Golaço!!!!!",
    type: "success",
    position: "bottom-left",
  });

  if (
    currentUser.value.level &&
    currentUser.value.goals >= currentUser.value.level?.max_goals
  ) {
    await handleNextLevel(
      currentUser.value.id,
      currentUser.value.level.next_level?.id
    );

    const userResponse = await getCurrentUser(currentUser.value.id);
    setCurrentUser(userResponse);
  }
};
</script>
