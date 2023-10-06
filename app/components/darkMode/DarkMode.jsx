import React from "react";
import styles from "./dark.module.css";
import { Switch } from "antd";

const DarkMode = ({ toggle }) => {
  return (
    <div className={`pointer ${styles.toggleBtnContainer}`} onClick={toggle}>
      <Switch size="default" defaultChecked />
    </div>
  );
};

export default DarkMode;
