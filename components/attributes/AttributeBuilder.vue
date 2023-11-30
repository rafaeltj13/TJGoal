<template>
  <h1
    class="text-center py-8 text-2xl text-primary dark:text-primary-dark font-bold"
  >
    Attributos
  </h1>
  <h4 class="py-2 text-lg text-secondary dark:text-secondary-dark font-bold">
    Pontos de atributo restantes:
    <span class="font-bold text-primary dark:text-primary-dark">{{
      props.modelValue.points
    }}</span>
  </h4>
  <div class="flex items-center justify-between pt-4 gap-8">
    <div class="flex flex-col justify-center items-center gap-2 select-none">
      <p class="text-accent dark:text-accent-dark text-lg">PAC</p>
      <div v-if="props.isEdit" class="flex items-center">
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-left"
          @click="() => updateAttribute('pace', -10)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-left"
          @click="() => updateAttribute('pace', -1)"
        />
        <p class="text-secondary dark:text-secondary-dark text-lg mx-2">
          {{ props.modelValue.pace }}
        </p>
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-right"
          @click="() => updateAttribute('pace', 1)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-right"
          @click="() => updateAttribute('pace', 10)"
        />
      </div>
      <p v-else class="text-secondary dark:text-secondary-dark text-lg mx-2">
        {{ props.modelValue.pace }}
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-2 select-none">
      <p class="text-accent dark:text-accent-dark text-lg">SHO</p>
      <div v-if="props.isEdit" class="flex items-center">
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-left"
          @click="() => updateAttribute('shooting', -10)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-left"
          @click="() => updateAttribute('shooting', -1)"
        />
        <p class="text-secondary dark:text-secondary-dark text-lg mx-2">
          {{ props.modelValue.shooting }}
        </p>
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-right"
          @click="() => updateAttribute('shooting', 1)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-right"
          @click="() => updateAttribute('shooting', 10)"
        />
      </div>
      <p v-else class="text-secondary dark:text-secondary-dark text-lg mx-2">
        {{ props.modelValue.shooting }}
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-2 select-none">
      <p class="text-accent dark:text-accent-dark text-lg">PAS</p>
      <div v-if="props.isEdit" class="flex items-center">
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-left"
          @click="() => updateAttribute('passing', -10)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-left"
          @click="() => updateAttribute('passing', -1)"
        />
        <p class="text-secondary dark:text-secondary-dark text-lg mx-2">
          {{ props.modelValue.passing }}
        </p>
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-right"
          @click="() => updateAttribute('passing', 1)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-right"
          @click="() => updateAttribute('passing', 10)"
        />
      </div>
      <p v-else class="text-secondary dark:text-secondary-dark text-lg mx-2">
        {{ props.modelValue.passing }}
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-2 select-none">
      <p class="text-accent dark:text-accent-dark text-lg">DRI</p>
      <div v-if="props.isEdit" class="flex items-center">
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-left"
          @click="() => updateAttribute('dribbling', -10)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-left"
          @click="() => updateAttribute('dribbling', -1)"
        />
        <p class="text-secondary dark:text-secondary-dark text-lg mx-2">
          {{ props.modelValue.dribbling }}
        </p>
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-right"
          @click="() => updateAttribute('dribbling', 1)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-right"
          @click="() => updateAttribute('dribbling', 10)"
        />
      </div>
      <p v-else class="text-secondary dark:text-secondary-dark text-lg mx-2">
        {{ props.modelValue.dribbling }}
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-2 select-none">
      <p class="text-accent dark:text-accent-dark text-lg">DEF</p>
      <div v-if="props.isEdit" class="flex items-center">
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-left"
          @click="() => updateAttribute('defending', -10)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-left"
          @click="() => updateAttribute('defending', -1)"
        />
        <p class="text-secondary dark:text-secondary-dark text-lg mx-2">
          {{ props.modelValue.defending }}
        </p>
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-right"
          @click="() => updateAttribute('defending', 1)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-right"
          @click="() => updateAttribute('defending', 10)"
        />
      </div>
      <p v-else class="text-secondary dark:text-secondary-dark text-lg mx-2">
        {{ props.modelValue.defending }}
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-2 select-none">
      <p class="text-accent dark:text-accent-dark text-lg">PHY</p>
      <div v-if="props.isEdit" class="flex items-center">
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-left"
          @click="() => updateAttribute('physical', -10)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-left"
          @click="() => updateAttribute('physical', -1)"
        />
        <p class="text-secondary dark:text-secondary-dark text-lg mx-2">
          {{ props.modelValue.physical }}
        </p>
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angle-right"
          @click="() => updateAttribute('physical', 1)"
        />
        <TheIcon
          customClass="text-primary dark:text-primary-dark
          hover:scale-125 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
          faIcon="fa-solid fa-angles-right"
          @click="() => updateAttribute('physical', 10)"
        />
      </div>
      <p v-else class="text-secondary dark:text-secondary-dark text-lg mx-2">
        {{ props.modelValue.physical }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
type Attributes = {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
  points: number;
};

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Object as PropType<Attributes>,
    required: true,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

const attributes = ref(props.modelValue);

const updateAttribute = (
  attributeName:
    | "pace"
    | "shooting"
    | "passing"
    | "dribbling"
    | "defending"
    | "physical",
  value: number
) => {
  if (value > 0 && attributes.value.points <= 0) return;
  else if (value > 0 && value > attributes.value.points) return;
  else if (value + attributes.value[attributeName] < 1) return;
  else if (value + attributes.value[attributeName] > 99) return;

  attributes.value.points -= value;
  attributes.value[attributeName] += value;

  emit("update:modelValue", attributes.value);
};
</script>
