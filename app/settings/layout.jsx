"use client";
import React from "react";
import { Suspense, useContext } from "react";
import { HeightContext } from "../context/HeightContext";
import { lazy } from "react";
import styles from "./layout.module.css";
import RollingAnimation from "../components/animaate/RollingAnimation";
import Back from "./Back";

const SettingsNav = lazy(() => import("./SettingsNav"));
const Layout = ({ children }) => {
  const { screenWidth, loading } = useContext(HeightContext);
  return (
    <div className="flex width100" style={{ height: "100vh" }}>
      {screenWidth >= 900 && (
        <div
          className={`scroll_y_black_white flex column ${styles.allSettingsContainer}`}
        >
          <Suspense fallback={<RollingAnimation />}>
            <SettingsNav />
          </Suspense>
        </div>
      )}
      {loading && (
        <div
          className={`scroll_y_black_white flex column ${styles.allSettingsContainer}`}
        >
          <RollingAnimation />
        </div>
      )}

      <div
        className={`scroll_y_black_white flex column ${styles.childrenContainer}`}
      >
        {!loading ? (
          <div className="flex column gap1rem">
            <Back /> <div className={styles.children}>{children}</div>
          </div>
        ) : (
          <RollingAnimation />
        )}
      </div>
    </div>
  );
};

export default Layout;
