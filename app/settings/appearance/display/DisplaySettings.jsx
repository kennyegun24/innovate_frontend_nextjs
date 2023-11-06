"use client";
import DarkMode from "@/app/components/darkMode/DarkMode";
import { ThemeContext } from "@/app/context/DarkMode";
import React from "react";
import { useContext } from "react";
import styles from "../styles.module.css";
import { LanguageContext } from "@/app/context/LanguageProvider";

const DisplaySettings = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const { translateText } = useContext(LanguageContext);
  const _language = (param) => {
    return translateText("settings.appearance.display." + param);
  };
  return (
    <div className="flex align_center justify_between">
      <p className={styles.label}>
        {_language("sub_header") || "Toggle between light and dark mode"}
      </p>
      <DarkMode toggle={toggle} mode={mode} />
    </div>
  );
};

export default DisplaySettings;
