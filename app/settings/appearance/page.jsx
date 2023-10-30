import React from "react";
import DisplaySettings from "./display/DisplaySettings";
import LanguageSettings from "./languages/LanguageSettings";
import styles from "./styles.module.css";

const Appearance = () => {
  return (
    <div className={`flex column ${styles.container}`}>
      <h3 className={styles.header}>Appearance Settings</h3>
      <section className={`flex column ${styles.subContainer}`}>
        <div>
          <h5 className={`theme ${styles.subHeader}`}>Display Settings</h5>
          <DisplaySettings />
        </div>
        <div>
          <h5 className={`theme ${styles.subHeader}`}>Language Settings</h5>
          <LanguageSettings />
        </div>
      </section>
    </div>
  );
};

export default Appearance;
