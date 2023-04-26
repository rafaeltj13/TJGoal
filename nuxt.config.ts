// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/supabase"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  googleFonts: {
    families: {
      Comfortaa: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
