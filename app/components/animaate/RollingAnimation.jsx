import React from "react";
import styles from "./roll.module.css";

const RollingAnimation = ({ text }) => {
  return (
    <div className={styles.rollDiv}>
      <h5>{text}</h5>
      <p className={styles.roll} />
    </div>
  );
};

export default RollingAnimation;
