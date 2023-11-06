"use client";
import { createContext, useEffect, useState } from "react";
import spanishTranslations from "../../languages/spanish.json";
import englishTranslations from "../../languages/english.json";
import chineseTranslations from "../../languages/chinese.json";
import russianTranslations from "../../languages/russian.json";

export const LanguageContext = createContext();
const translations = {
  es: spanishTranslations,
  en: englishTranslations,
  ch: chineseTranslations,
  rs: russianTranslations,
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
    localStorage.setItem("innovate_web", param);
  };
  useEffect(() => {
    const lang = localStorage.getItem("innovate_web")
      ? localStorage.getItem("innovate_web")
      : "en";
    setLanguage(lang);
  }, []);
  return (
    <LanguageContext.Provider
      value={{ language, translateText, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
