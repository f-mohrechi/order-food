import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../../assets/locales/en.json";
import fa from "../../assets/locales/fa.json";

const selectedLanguage = localStorage.getItem("language") || "en";
const selectedDirection = localStorage.getItem("direction") || "ltr"; // Default direction

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fa: {
        translation: fa,
      },
    },
    fallbackLng: "en",
    lng: selectedLanguage,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });
document.documentElement.dir = selectedDirection;

export default i18n;
