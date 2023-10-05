import React from "react";
import styles from "./dark.module.css";
import { Switch } from "antd";

const DarkMode = ({ toggle }) => {
  return (
    <div
      className={`pointer ${styles.toggleBtnContainer} border`}
      onClick={toggle}
    >
      <Switch size="small" defaultChecked />
    </div>
  );
};

export default DarkMode;
