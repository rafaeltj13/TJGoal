<template>
  <div class="container mx-auto">
    <div class="w-full">
      <HeadlessListbox @update:model-value="updateValue" as="div">
        <div class="relative mt-1">
          <HeadlessListboxButton
            class="relative w-full cursor-´pointer rounded-lg bg-background dark:bg-background-dark border-[1px] border-secondary dark:border-secondary-dark py-2 pl-3 pr-10 text-left shadow-md"
          >
            <span class="text-tertiary dark:text-tertiary-dark text-sm">
              {{ props.modelValue?.text || props.placeholder }}
            </span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <TheIcon
                fa-icon="fa-solid fa-angle-down"
                custom-class="text-tertiary dark:text-tertiary-dark"
              />
            </span>
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-background dark:bg-background-dark py-1 text-base shadow-lg dark:border-2 dark:border-secondary-dark ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <HeadlessListboxOption
                v-for="option of props.options"
                v-slot="{ active, selected }"
                :key="option.text"
                :value="option"
                as="template"
              >
                <li
                  :class="[
                    active
                      ? 'bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark'
                      : 'text-secondary dark:text-secondary-dark',
                    'relative cursor-default select-none py-2 px-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ option.text }}</span
                  >
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
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
  placeholder: {
    type: String,
    default: "Selecionar",
  },
});
const emit = defineEmits(["update:modelValue"]);

const updateValue = (value: Option) => {
  emit("update:modelValue", value);
};
</script>
