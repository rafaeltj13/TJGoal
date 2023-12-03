<template>
  <ShootOption title="Chutar" @shoot="handleShoot" />
  <ShootOption title="Cobrar Pênalti" @shoot="handleShoot" />
</template>
<script setup lang="ts">
import { useLevelApi } from "~/composables/api/useLevels";
import { useShootApi } from "~/composables/api/useShoot";
import { useUserApi } from "~/composables/api/useUser";

const { setNotification } = useNotification();
const { currentUser, setCurrentUser } = useCurrentUser();
const handleShoot = async () => {
  await useShootApi().shoot(currentUser.value.id, currentUser.value.team?.id);
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
    await useLevelApi().updateUserLevel(
      currentUser.value.id,
      currentUser.value.level.next_level?.id
    );

    const userResponse = await useUserApi().getUser(currentUser.value.id);
    setCurrentUser(userResponse);
  }
};
</script>
~/composables/api/useUserApi ~/composables/api/useLevels
~/composables/api/useShoot~/composables/api/useUser
