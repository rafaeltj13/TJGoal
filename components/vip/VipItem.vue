<template>
  <div
    @click="emit('displayDetails', config)"
    class="w-full md:w-28 h-28 cursor-pointer bg-background border-background dark:bg-background-dark shadow-lg hover:scale-125 hover:shadow-2xl transition-all border-2 dark:border-primary-dark rounded-xl flex flex-col items-center justify-center"
  >
    <TheIcon
      :customClass="`text-${config.color} text-xl my-2`"
      :faIcon="config.icon"
    />
    <p class="text-center text-primary dark:text-primary-dark text-md">
      {{ $t(`vip.${config.type}`) }}
    </p>
    <p
      class="text-center text-secondary dark:text-secondary-dark text-md flex items-center"
    >
      {{ config.price }}
      <TheIcon
        customClass="text-text dark:text-text-dark cursor-pointer text-xl ml-2"
        faIcon="fa-solid fa-money-bill"
      />
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<"normal" | "star" | "mythical">,
    required: true,
  },
});

const emit = defineEmits(["displayDetails"]);

const config = computed(() => {
  switch (props.type) {
    case "normal":
      return {
        type: "normal",
        color: "orange-800",
        title: "Normal",
        icon: "fa-solid fa-crown",
        price: 50,
        durationDays: 7,
      };
    case "star":
      return {
        type: "star",
        color: "emerald-800",
        title: "Star",
        icon: "fa-solid fa-star",
        price: 100,
        durationDays: 15,
      };
    case "mythical":
      return {
        type: "mythical",
        color: "indigo-800",
        title: "Mythical",
        icon: "fa-solid fa-hat-wizard",
        price: 150,
        durationDays: 30,
      };
  }
});
</script>
