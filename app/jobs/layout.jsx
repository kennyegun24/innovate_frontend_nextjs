"use client";
import React, { lazy, Suspense, useContext } from "react";
import styles from "./layout.module.css";
import { HeightContext } from "../context/HeightContext";

const Layout = ({ children }) => {
  const { screenWidth } = useContext(HeightContext);
  const AllJobs = lazy(() => import("../components/jobs/AllJobs"));
  return (
    <div className={`flex width100 ${styles.layoutContainer} padding05rem`}>
      {screenWidth >= 600 && (
        <div
          style={{
            width: "40%",
          }}
          className={`scroll_y`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AllJobs />
          </Suspense>
        </div>
      )}
      <div className={styles.layoutChildren}>{children}</div>
    </div>
  );
};

export default Layout;
