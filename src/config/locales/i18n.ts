import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(backend)
  .init({
    lng: localStorage.getItem('i18nextLng') || "en-US",
    supportedLngs: ["en-US", "fa-IR"],
    fallbackLng: localStorage.getItem('i18nextLng') || "en-US",
    ns: 'header',
    detection: {
      order: ["localStorage" ,"path", "htmlTag", "cookie", "subdomain","navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    saveMissing: true,
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
