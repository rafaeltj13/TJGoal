<template>
  <ShootOption type="default" @shoot="handleShooting" />
  <ShootOption type="penalty" @shoot="handleShooting" />
  <ShootOption type="freeKick" @shoot="handleShooting" />
  <ShootOption type="counterAttack" @shoot="handleShooting" />
  <ShootModal
    v-if="shooting"
    v-model="shooting"
    :shoot-type="currentShootType"
    @goal="handleGoal"
    @miss="handleMiss"
  />
</template>
<script setup lang="ts">
import { useLevelApi } from "~/composables/api/useLevels";
import { useShootApi } from "~/composables/api/useShoot";
import { useUserApi } from "~/composables/api/useUser";

const { t } = useI18n();

const { setNotification } = useNotification();
const { currentUser, setCurrentUser } = useCurrentUser();

const shooting = ref(false);
const currentShootType = ref<
  "default" | "penalty" | "freeKick" | "counterAttack"
>("default");

const handleShooting = async (
  type: "default" | "penalty" | "freeKick" | "counterAttack"
) => {
  shooting.value = true;
  currentShootType.value = type;
};

const handleGoal = async (type: string) => {
  await useShootApi().shoot(
    currentUser.value.id,
    type,
    currentUser.value.team?.id
  );
  await useUserApi().shoot(currentUser.value.id, currentUser.value.goals + 1);
  currentUser.value.goals = currentUser.value.goals + 1;

  setNotification({
    title: t("notification.goal"),
    content: t(`notification.${type}`),
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

    setNotification({
      title: t("notification.lvlUp"),
      content: t("notification.lvlUpDescription"),
      type: "success",
    });
  }
};

const handleMiss = async () => {
  setNotification({
    title: t("notification.missTitle"),
    content: t("notification.miss"),
    type: "error",
  });
};
</script>
