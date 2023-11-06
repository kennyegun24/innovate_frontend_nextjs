"use client";
import { createContext, useState } from "react";
import spanishTranslations from "../../languages/spanish.json";
import englishTranslations from "../../languages/english.json";

export const LanguageContext = createContext();
const translations = {
  es: spanishTranslations,
  en: englishTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const queryJSON = (object, keys) => {
    return keys.split(".").reduce((obj, key) => obj && obj[key], object);
  };
  const translateText = (key) => {
    return queryJSON(translations[language], key);
  };
  const switchLanguage = (param) => {
    setLanguage(param);
  };
  return (
    <LanguageContext.Provider
      value={{ language, translateText, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
