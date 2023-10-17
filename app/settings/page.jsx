"use client";
import React from "react";
import { Suspense, useContext } from "react";
import { HeightContext } from "../context/HeightContext";
import { lazy } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RollingAnimation from "../components/animaate/RollingAnimation";
const SettingsNav = lazy(() => import("./SettingsNav"));
const Page = () => {
  const { screenWidth, loading } = useContext(HeightContext);
  const router = useRouter();
  useEffect(() => {
    if (screenWidth > 899) {
      setTimeout(() => {
        router.push("/settings/account");
      }, 2500);
    }
  }, [screenWidth, loading, router]);

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
                <RollingAnimation text={"Settings"} />
              </div>
            }
          >
            <SettingsNav />
          </Suspense>
        </div>
      ) : (
        <div style={{ height: "100vh", width: "100%" }}>
          <RollingAnimation text={"Loading"} />
        </div>
      )}
    </div>
  );
};

export default Page;
