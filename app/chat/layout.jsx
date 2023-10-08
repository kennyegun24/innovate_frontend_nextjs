"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import AllChats from "../components/chat/AllChats";
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
  const AllChats = lazy(() => import("../components/chat/AllChats"));
  return (
    <div
      className={`flex align_center justify_center ${styles.layoutContainer}`}
    >
      <div
        className={`flex align_Center border background2 theme ${styles.subLayoutContainer}`}
      >
        {screenWidth >= 600 && (
          <div className={`scroll_y ${styles.layoutAllChatsDiv}`}>
            <Suspense fallback={<div>Loading...</div>}>
              <AllChats />
            </Suspense>
          </div>
        )}
        <div className={styles.layoutChildren}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
