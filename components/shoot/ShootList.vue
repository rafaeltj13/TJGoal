<template>
  <ShootOption title="Chutar" @shoot="handleShoot" />
  <ShootOption title="Cobrar Pênalti" @shoot="handleShoot" />
</template>
<script setup lang="ts">
import { useShootAPI } from "~/composables/api/useShootAPI";
import { useLevelAPI } from "~/composables/api/useLevelAPI";
import { useUserApi } from "~/composables/api/useUserApi";

const { setNotification } = useNotification();
const { currentUser, setCurrentUser } = useCurrentUser();
const handleShoot = async () => {
  await useShootAPI().shoot(currentUser.value.id, currentUser.value.team?.id);
  currentUser.value.goals = currentUser.value.goals + 1;

  setNotification({
    title: "Chute.....",
    content: "Golaço!!!!!",
    type: "success",
  });

  if (
    currentUser.value.level &&
    currentUser.value.goals >= currentUser.value.level?.max_goals
  ) {
    await useLevelAPI().updateUserLevel(
      currentUser.value.id,
      currentUser.value.level.next_level?.id
    );

    const userResponse = await useUserApi().getUser(currentUser.value.id);
    setCurrentUser(userResponse);
  }
};
</script>
~/composables/api/useUserApi
