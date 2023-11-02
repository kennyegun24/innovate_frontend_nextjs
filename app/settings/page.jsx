"use client";
import React from "react";
import { Suspense, useContext } from "react";
import { HeightContext } from "../context/HeightContext";
import { lazy } from "react";
import RollingAnimation from "../components/animaate/RollingAnimation";
const SettingsNav = lazy(() => import("./SettingsNav"));
const Page = () => {
  const { screenWidth, loading } = useContext(HeightContext);

  return (
    <div className="flex width100">
      {screenWidth <= 899 ? (
        <div
          className={`scroll_y_black_white flex column`}
          style={{ width: "100%" }}
        >
          <Suspense
            fallback={
              <div style={{ height: "100vh" }}>
                <RollingAnimation />
              </div>
            }
          >
            <SettingsNav />
          </Suspense>
        </div>
      ) : (
        <div
          style={{ height: "100vh", width: "100%" }}
          className="flex align_center justify_center"
        >
          <h2>Select any to display</h2>
        </div>
      )}
    </div>
  );
};

export default Page;
