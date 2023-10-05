"use client";
import React, { lazy, Suspense, useContext } from "react";
import { HeightContext } from "../context/HeightContext";
import styles from "./styles.module.css";

const Jobs = () => {
  const { screenWidth } = useContext(HeightContext);
  const AllJobs = lazy(() => import("@/app/components/jobs/AllJobs"));
  return (
    <>
      {screenWidth < 600 ? (
        <div
          className={`scroll_y ${styles.showHide}`}
          style={{
            maxHeight: "100%",
            minHeight: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            borderRight: "none",
          }}
        >
          <Suspense
            fallback={
              <div
                className={`align_center justify_center `}
                style={{ height: "100vh" }}
              >
                Loading...
              </div>
            }
          >
            <AllJobs />
          </Suspense>
        </div>
      ) : (
        <div
          className="flex align_center justify_center"
          style={{
            height: "100%",
          }}
        >
          <span>
            Open a job to see its details to know if you are a good fit!
          </span>
        </div>
      )}
    </>
  );
};

export default Jobs;
