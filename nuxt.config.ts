// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "nuxt-headlessui",
    "@nuxtjs/i18n",
    "dayjs-nuxt",
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  googleFonts: {
    families: {
      "Chakra Petch": [300, 400, 500],
    },
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/",
      exclude: ["/*"],
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
