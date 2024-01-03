import en from "./public/locales/en";
import pt from "./public/locales/ptbr";

export default defineI18nConfig(() => ({
  legacy: false,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "isEnglish",
    redirectOn: "root",
  },
  messages: {
    en,
    pt,
  },
}));
