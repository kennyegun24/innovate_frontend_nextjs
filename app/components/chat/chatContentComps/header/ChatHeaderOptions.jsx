import React from "react";
import styles from "./styles.module.css";
const ChatHeaderOptions = () => {
  return (
    <div
      className="absolute background theme flex gap05rem column"
      style={{
        right: 0,
        top: "1.5rem",
        whiteSpace: "nowrap",
        padding: "0.5rem 1rem",
      }}
    >
      <p className={styles.popupText}>Profile</p>
      <p className={styles.popupText}>Block user</p>
      <p className={styles.popupText}>Report user</p>
    </div>
  );
};

export default ChatHeaderOptions;
