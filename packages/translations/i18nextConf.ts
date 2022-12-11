import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";
import translationRO from "./locales/ro/translation.json";
import translationES from "./locales/es/translation.json";

const fallbackLng = "en";

const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
  ro: {
    translation: translationRO,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(Backend) // load translations using http (default public/assets/locals/en/translations)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng,
    detection: {
      checkWhitelist: false, // options for language detection
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
