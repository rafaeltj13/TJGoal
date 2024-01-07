<template>
  <div
    class="p-8 max-w-[800px] mx-auto min-h-[100vh] text-primary dark:text-primary-dark"
  >
    <ThePageTitle title="FAQ" />

    <TheDisclosure :title="$t('faq.question1')">
      <template #default>
        <p class="mb-6">
          {{ $t("faq.answer11") }}
        </p>
        <p class="mb-6">
          {{ $t("faq.answer12") }}
        </p>
        <p class="mb-6">
          {{ $t("faq.answer13") }}
        </p>
        <p>
          {{ $t("faq.answer14") }}
        </p>
      </template>
    </TheDisclosure>
    <TheDisclosure :title="$t('faq.question2')" class="mt-4">
      <template #default>
        <p>
          {{ $t("faq.answer2") }}
        </p>
      </template>
    </TheDisclosure>
    <TheDisclosure :title="$t('faq.question3')" class="mt-4">
      <template #default>
        <p>
          {{ $t("faq.answer3") }}
        </p>
      </template>
    </TheDisclosure>
    <TheDisclosure :title="$t('faq.question4')" class="mt-4">
      <template #default>
        <p class="mb-6">
          {{ $t("faq.answer4") }}
        </p>
        <div class="flex items-center justify-center gap-8">
          <a href="mailto:rafael.damaciel@gmail.com">
            <TheIcon
              customClass="text-accent dark:text-accent-dark text-xl cursor-pointer hover:scale-125 transition-all"
              faIcon="fa-solid fa-envelope"
            />
          </a>
          <TheIcon
            customClass="text-accent dark:text-accent-dark text-xl cursor-pointer hover:scale-125 transition-all"
            faIcon="fa-brands fa-github"
            @click="() => openSocialMediaLink('https://github.com/rafaeltj13')"
          />
          <TheIcon
            customClass="text-accent dark:text-accent-dark text-xl cursor-pointer hover:scale-125 transition-all"
            faIcon="fa-brands fa-linkedin"
            @click="
              () =>
                openSocialMediaLink(
                  'https://www.linkedin.com/in/rafael-de-ara%C3%BAjo-14b5b1117/'
                )
            "
          />
          <TheIcon
            customClass="text-accent dark:text-accent-dark text-xl cursor-pointer hover:scale-125 transition-all"
            faIcon="fa-brands fa-instagram"
            @click="
              () =>
                openSocialMediaLink(
                  'https://www.instagram.com/rafaeldearaujo_/'
                )
            "
          />
          <TheIcon
            customClass="text-accent dark:text-accent-dark text-xl cursor-pointer hover:scale-125 transition-all"
            faIcon="fa-brands fa-x-twitter"
            @click="() => openSocialMediaLink('https://twitter.com/liltejota')"
          />
        </div>
      </template>
    </TheDisclosure>
    <TheDisclosure :title="$t('faq.question5')" class="mt-4">
      <template #default>
        <p class="mb-6">
          {{ $t("faq.answer5") }}
        </p>
        <div class="flex items-center justify-center">
          <TheIcon
            customClass="text-accent dark:text-accent-dark text-xl cursor-pointer hover:scale-125 transition-all"
            faIcon="fa-brands fa-github"
            @click="
              () => openSocialMediaLink('https://github.com/rafaeltj13/TJGoal')
            "
          />
        </div>
      </template>
    </TheDisclosure>
  </div>
</template>

<script setup lang="ts">
useDefaultHead("TJGoal - FAQ");
definePageMeta({
  middleware: "registered",
});

const openSocialMediaLink = (link: string) => {
  window.open(link, "_blank");
};
</script>
