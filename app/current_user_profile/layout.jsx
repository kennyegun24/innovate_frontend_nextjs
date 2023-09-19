"use client";
import React, { useContext } from "react";
import ProfileNav from "@/app/components/profile/profileNav/ProfileNav";
import Header from "./Header";
import styles from "./page.module.css";
import { ThemeContext } from "../context/DarkMode";

const Layout = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={styles.layoutContainer}>
      <div className={`theme background2 ${styles.layoutProfileNavDiv}`}>
        <ProfileNav />
      </div>
      <div className={styles.layoutProfileChildren}>
        <Header mode={mode} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
