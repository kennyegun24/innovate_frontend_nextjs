import React from "react";
import AllJobs from "../components/jobs/AllJobs";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={`flex width100 ${styles.layoutContainer} padding05rem`}>
      <div
        style={{
          width: "40%",
        }}
        className={`scroll_y`}
      >
        <AllJobs />
      </div>
      <div
        style={{
          width: "55%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
