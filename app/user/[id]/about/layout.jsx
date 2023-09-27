"use client";
import React from "react";
import ProfileAboutNav from "./ProfileAboutNav";
import styles from "./layout.module.css";

const AboutLayout = ({ children }) => {
  return (
    <div className={`flex gap2rem ${styles.container}`}>
      <div className={styles.containerSm}>
        <ProfileAboutNav />
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default AboutLayout;
