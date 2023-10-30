import React from "react";
import styles from "./animation.module.css";
const Animation = ({ num, text, width }) => {
  return (
    <div className={styles.centerAnimation}>
      <h3>{text}</h3>
      {Array.from({ length: num }).map((val, index) => (
        <>
          <div key={index} className={styles.animationCard}>
            <div className={styles.animationHead2}></div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Animation;
