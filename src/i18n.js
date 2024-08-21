import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importation des fichiers de traduction
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

// Les ressources de traduction
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // passe l'instance i18n à react-i18next.
  .init({
    resources,
    lng: "en", // la langue par défaut
    fallbackLng: "en", // la langue à utiliser si la traduction de la langue courante est absente

    interpolation: {
      escapeValue: false, // react déjà échappe les valeurs par défaut
    },
  });

export default i18n;
