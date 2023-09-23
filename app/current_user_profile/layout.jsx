import React from "react";
import ProfileNav from "@/app/components/profile/profileNav/ProfileNav";
import Header from "./Header";
import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={`theme background2 ${styles.layoutProfileNavDiv}`}>
        <ProfileNav />
      </div>
      <div className={styles.layoutProfileChildren}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
