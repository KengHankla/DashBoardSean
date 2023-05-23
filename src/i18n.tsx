import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "translation/english/translation.json";
import translationThal from "translation/thai/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  th: {
    translation: translationThal,
  },
};

i18next.use(initReactI18next).init({ resources, lng: "th" });

export default i18next;
