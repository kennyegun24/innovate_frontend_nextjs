"use client";
import React from "react";
import { useContext } from "react";
import DisplaySettings from "./display/DisplaySettings";
import LanguageSettings from "./languages/LanguageSettings";
import styles from "./styles.module.css";
import { LanguageContext } from "@/app/context/LanguageProvider";

const Appearance = () => {
  const { translateText } = useContext(LanguageContext);

  const _language = (param) => {
    return translateText("settings.appearance." + param);
  };
  return (
    <div className={`flex column ${styles.container}`}>
      <h3 className={styles.header}>
        {_language("header") || "Appearance Settings"}
      </h3>
      <section className={`flex column ${styles.subContainer}`}>
        <div>
          <h5 className={`theme ${styles.subHeader}`}>
            {_language("display.header") || "Display Settings"}
          </h5>
          <DisplaySettings />
        </div>
        <div>
          <h5 className={`theme ${styles.subHeader}`}>
            {_language("language.header") || "Language Settings"}
          </h5>
          <LanguageSettings />
        </div>
      </section>
    </div>
  );
};

export default Appearance;
