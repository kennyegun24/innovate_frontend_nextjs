"use client";
import React from "react";
import ProfileNav from "@/app/components/profile/profileNav/ProfileNav";
import Header from "./Header";
import styles from "./page.module.css";
import Back from "@/app/components/Back";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
        className={styles.backDiv1}
      >
        <Back />
      </div>
      <div className={styles.backDiv2}>
        <Back />
      </div>
      <div className={styles.layoutProfileChildren}>{children}</div>
    </div>
  );
};

export default Layout;
