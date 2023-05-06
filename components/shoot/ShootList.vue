<template>
  <ShootOption title="Chutar" @shoot="handleShoot" />
  <ShootOption title="Cobrar Pênalti" @shoot="handleShoot" />
</template>
<script setup lang="ts">
const { currentUser } = useCurrentUser();
const { shoot } = useAPI();

const handleShoot = async () => {
  await shoot(currentUser.value.id, currentUser.value.goals);
  currentUser.value.goals = currentUser.value.goals + 1;
};
</script>
