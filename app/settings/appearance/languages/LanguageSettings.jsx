"use client";
import React, { useCallback } from "react";
import { useContext } from "react";
import styles from "./styles.module.css";
import { LanguageContext } from "@/app/context/LanguageProvider";

const LanguageSettings = () => {
  const { switchLanguage, translateText } = useContext(LanguageContext);

  const _switch = useCallback(
    (e) => {
      const value = e.target.value;
      switchLanguage(value);
    },
    [switchLanguage]
  );

  const _language = (param) => {
    return translateText("settings.appearance.language." + param);
  };

  return (
    <div className={styles.container}>
      <h5>{_language("sub_header") || "Select Your Desired Language"}</h5>
      <select className={styles.select} name="" id="" onChange={_switch}>
        <option value="en">{_language("options.en") || "English"}</option>
        <option value="es">{_language("options.es") || "Spanish"}</option>
        <option value="rs">{_language("options.rs") || "Russian"}</option>
        <option value="ch">{_language("options.ch") || "Chinese"}</option>
        <option value="fr">{_language("fr") || "French"}</option>
      </select>
    </div>
  );
};

export default LanguageSettings;
