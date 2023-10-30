import React from "react";
import styles from "./styles.module.css";

const LanguageSettings = () => {
  return (
    <div className={styles.container}>
      <h5>Select your desired language</h5>
      <select className={styles.select} name="" id="">
        <option value="">English</option>
        <option value="">Spanish</option>
        <option value="">Russian</option>
        <option value="">Chineese</option>
        <option value="">French</option>
      </select>
    </div>
  );
};

export default LanguageSettings;
