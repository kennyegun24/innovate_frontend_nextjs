import React from "react";
import AllChats from "../components/chat/AllChats";
import styles from "./layout.module.css";

const layout = ({ children }) => {
  return (
    <div
      className={`flex align_center justify_center ${styles.layoutContainer}`}
    >
      <div
        className={`flex align_Center border background2 theme ${styles.subLayoutContainer}`}
      >
        <div className={`scroll_y ${styles.layoutAllChatsDiv}`}>
          <AllChats />
        </div>
        <div className={styles.layoutChildren}>{children}</div>
      </div>
    </div>
  );
};

export default layout;
