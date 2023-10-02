<template>
  <ShootOption title="Chutar" @shoot="handleShoot" />
  <ShootOption title="Cobrar Pênalti" @shoot="handleShoot" />
</template>
<script setup lang="ts">
import { useShootAPI } from "~/composables/api/useShootAPI";
import { useLevelAPI } from "~/composables/api/useLevelAPI";
import { useUserAPI } from "~/composables/api/useUserAPI";
import { User } from "~/lib/data.types";

const { setNotification } = useNotification();
const { currentUser, setCurrentUser } = useCurrentUser();
const handleShoot = async () => {
  await useShootAPI().shoot(
    currentUser.value.id,
    currentUser.value.goals,
    currentUser.value.team?.id
  );
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

    const userResponse = await useUserAPI().getUser(currentUser.value.id);
    setCurrentUser(userResponse);
  }
};
</script>
