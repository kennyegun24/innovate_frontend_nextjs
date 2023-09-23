import React from "react";
import styles from "./dark.module.css";

const DarkMode = ({ toggle, mode }) => {
  const dark_button = "#111",
    light_button = "#fff";
  return (
    <div
      className={`pointer ${styles.toggleBtnContainer} border`}
      onClick={toggle}
    >
      <div className={styles.toggleBtn}>🌙</div>
      <div className={styles.toggleBtn}>🌞</div>
      <div
        className={styles.toggleRound}
        style={
          mode === "dark"
            ? { left: "2px", background: light_button }
            : { right: "2px", background: dark_button }
        }
      />
    </div>
  );
};

export default DarkMode;
