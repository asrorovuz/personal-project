import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  supportedLngs: ['en', 'ru', 'uz'],
    fallbackLng: "ru",
    detection: {
      order: ['htmlTag','cookie', 'localStorage', 'path', 'subdomain'],
      // caches: "cookie"
    },
    backend: {
      loadPath: '/public/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });
  
  export default i18n;