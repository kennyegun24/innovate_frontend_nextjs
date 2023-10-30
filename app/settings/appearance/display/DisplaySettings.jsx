"use client";
import DarkMode from "@/app/components/darkMode/DarkMode";
import { ThemeContext } from "@/app/context/DarkMode";
import React from "react";
import { useContext } from "react";
import styles from "../styles.module.css";

const DisplaySettings = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="flex align_center justify_between">
      <p className={styles.label}>Toggle Between dark and light modes</p>
      <DarkMode toggle={toggle} mode={mode} />
    </div>
  );
};

export default DisplaySettings;
