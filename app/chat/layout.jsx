"use client";
import React, { lazy, Suspense, useContext } from "react";
import styles from "./layout.module.css";
const AllChats = lazy(() => import("../components/chat/AllChats"));
import RollingAnimation from "../components/animaate/RollingAnimation";
import { HeightContext } from "../context/HeightContext";

const Layout = ({ children }) => {
  const { screenWidth, loading } = useContext(HeightContext);

  return (
    <div
      className={`flex align_center justify_center ${styles.layoutContainer}`}
    >
      <div
        className={`flex align_Center border background2 theme ${styles.subLayoutContainer}`}
      >
        {screenWidth >= 1025 && (
          <div className={`scroll_y_black_white flex column`}>
            <Suspense fallback={<RollingAnimation />}>
              <AllChats />
            </Suspense>
          </div>
        )}
        {loading && (
          <div className={`scroll_y_black_white flex column`}>
            <RollingAnimation />
          </div>
        )}
        <div className={styles.layoutChildren}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
