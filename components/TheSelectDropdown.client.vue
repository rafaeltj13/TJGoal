<template>
  <div class="flex relative" :key="new Date().toISOString()">
    <button
      class="w-full flex items-center justify-between flex-shrink-0 z-10 py-2.5 px-4 text-sm font-medium text-center text-text bg-gray-100 border border-secondary rounded-lg focus:ring-1 focus:outline-none focus:ring-secondary dark:bg-background-dark dark:hover:bg-sidebar-dark dark:focus:ring-secondary-dark dark:text-text-dark dark:border-secondary-dark"
      type="button"
      @click="openDropdown = !openDropdown"
    >
      <p class="mr-4 text-text dark:text-text-dark">
        {{ props.modelValue?.text || "Selecionar" }}
      </p>
      <TheIcon
        v-if="!openDropdown"
        fa-icon="fa-solid fa-angle-down"
        custom-class="text-text dark:text-text-dark"
      />
      <TheIcon
        v-else
        fa-icon="fa-solid fa-angle-up"
        custom-class="text-text dark:text-text-dark"
      />
    </button>
    <div
      :class="{ '!scale-100': openDropdown }"
      class="absolute w-full top-12 bg-background rounded-lg dark:bg-background-dark shadow-lg transition-all duration-200 scale-0 max-h-60 overflow-y-auto"
    >
      <ul class="py-2 text-sm text-text dark:text-gray-200">
        <li
          v-for="(option, index) of props.options"
          :key="index"
          @click="updateValue(option)"
        >
          <!-- Meter slot aqui pra recerber img ou icon -->
          <button
            type="button"
            class="inline-flex w-full px-4 py-2 text-sm text-text hover:bg-secondary hover:text-background dark:text-text-dark dark:hover:bg-secondary-dark dark:hover:text-background-dark"
          >
            <div class="inline-flex items-center">
              {{ option.text }}
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type Option = {
  text: string;
  id: string | number;
};

const props = defineProps({
  modelValue: {
    type: Object as PropType<Option>,
    required: true,
  },
  options: {
    type: Array<Option>,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const openDropdown = ref(false);
const updateValue = (value: Option) => {
  emit("update:modelValue", value);
  openDropdown.value = false;
};
</script>
