<template>
  <TheModal v-model="showModal">
    <template #content>
      <div
        class="text-center mb-4 text-primary dark:text-primary-dark text-3xl font-bold"
      >
        {{ $t(`shoot.${props.shootType}`) }}
      </div>
      <div class="text-center mb-4 text-tertiary dark:text-tertiary-dark">
        {{ $t("shoot.bonusAttributes") }}
      </div>
      <div class="flex items-center justify-between">
        <p
          :class="{
            'text-primary dark:text-primary-dark':
              mapShootToAttributes[props.shootType].includes('pace'),
          }"
          class="text-accent dark:text-accent-dark"
        >
          {{ $t("shoot.pace") }}
        </p>
        <p class="text-primary dark:text-primary-dark">
          {{ $t("shoot.shooting") }}
        </p>
        <p
          :class="{
            'text-primary dark:text-primary-dark':
              mapShootToAttributes[props.shootType].includes('passing'),
          }"
          class="text-accent dark:text-accent-dark"
        >
          {{ $t("shoot.passing") }}
        </p>
        <p
          :class="{
            'text-primary dark:text-primary-dark':
              mapShootToAttributes[props.shootType].includes('dribbling'),
          }"
          class="text-accent dark:text-accent-dark"
        >
          {{ $t("shoot.dribbling") }}
        </p>
        <p
          :class="{
            'text-primary dark:text-primary-dark':
              mapShootToAttributes[props.shootType].includes('defending'),
          }"
          class="text-accent dark:text-accent-dark"
        >
          {{ $t("shoot.defending") }}
        </p>
        <p
          :class="{
            'text-primary dark:text-primary-dark':
              mapShootToAttributes[props.shootType].includes('physical'),
          }"
          class="text-accent dark:text-accent-dark"
        >
          {{ $t("shoot.physical") }}
        </p>
      </div>
      <ShootDefault
        v-if="props.shootType === 'default'"
        :shooting="currentUser.shooting"
        :pace="currentUser.pace"
        :dribbling="currentUser.dribbling"
        @goal="handleGoal"
        @miss="handleMiss"
      />
      <ShootPenaulty
        v-else-if="props.shootType === 'penalty'"
        :shooting="currentUser.shooting"
        :pace="currentUser.pace"
        :physical="currentUser.physical"
        @goal="handleGoal"
        @miss="handleMiss"
      />
      <ShootFreekick
        v-else-if="props.shootType === 'freeKick'"
        :shooting="currentUser.shooting"
        :passing="currentUser.passing"
        :dribbling="currentUser.dribbling"
        @goal="handleGoal"
        @miss="handleMiss"
      />
    </template>
  </TheModal>
</template>

<script setup lang="ts">
const mapShootToAttributes = ref({
  default: ["pace", "dribbling"],
  penalty: ["pace", "physical"],
  freeKick: ["passing", "dribbling"],
  counterAttack: ["defending", "passing"],
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => false,
  },
  shootType: {
    type: String as PropType<
      "default" | "penalty" | "freeKick" | "counterAttack"
    >,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue", "goal", "miss"]);

const updateValue = (value: boolean) => {
  emit("update:modelValue", value);
};

const showModal = ref(props.modelValue);

const { currentUser } = useCurrentUser();

const handleGoal = () => {
  emit("goal", props.shootType);
  updateValue(false);
};

const handleMiss = () => {
  emit("miss");
  updateValue(false);
};

watch(
  () => props.modelValue,
  (value) => {
    showModal.value = value;
  }
);

watch(showModal, (value) => {
  updateValue(value);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
