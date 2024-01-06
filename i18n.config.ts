import en from "./plugins/i18n/locales/en";
import pt from "./plugins/i18n/locales/ptbr";

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ["en-US", "pt-BR"],
  defaultLocale: "en-US",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "languague",
    redirectOn: "root",
  },
  messages: {
    "en-US": en,
    "pt-BR": pt,
  },
}));
