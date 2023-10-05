"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    // Function to update screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial screen width
    updateScreenWidth();

    // Attach event listener to window resize event
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
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
