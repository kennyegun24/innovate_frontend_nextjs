"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
// import AllJobs from "../components/jobs/AllJobs";

const Jobs = () => {
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
  const AllJobs = lazy(() => import("@/app/components/jobs/AllJobs"));
  return (
    <div>
      {screenWidth < 600 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AllJobs />
        </Suspense>
      ) : (
        <div
          className="flex align_center justify_center"
          style={{
            height: "100vh",
          }}
        >
          <span>
            {" "}
            Open a job to see its details to know if you are a good fit!
          </span>
        </div>
      )}
    </div>
  );
};

export default Jobs;
