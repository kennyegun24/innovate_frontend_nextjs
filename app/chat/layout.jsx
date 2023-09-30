import React from "react";
import AllChats from "../components/chat/AllChats";
import styles from "./layout.module.css";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className={styles.layoutAllChatsDiv}>
        <AllChats />
      </div>
      <div className={styles.layoutChildren}>{children}</div>
    </div>
  );
};

export default layout;
