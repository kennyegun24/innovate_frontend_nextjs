"use client";
import React, { useCallback } from "react";
import { useContext } from "react";
import styles from "./styles.module.css";
import { LanguageContext } from "@/app/context/LanguageProvider";

const LanguageSettings = () => {
  const { switchLanguage, translateText, language } =
    useContext(LanguageContext);

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
        <option selected={language === "en"} value="en">
          {_language("options.en") || "English"}
        </option>
        <option selected={language === "es"} value="es">
          {_language("options.es") || "Spanish"}
        </option>
        <option selected={language === "rs"} value="rs">
          {_language("options.rs") || "Russian"}
        </option>
        <option selected={language === "ch"} value="ch">
          {_language("options.ch") || "Chinese"}
        </option>
        <option selected={language === "fr"} value="fr">
          {_language("options.fr") || "French"}
        </option>
      </select>
    </div>
  );
};

export default LanguageSettings;
