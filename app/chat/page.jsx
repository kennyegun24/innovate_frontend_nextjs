"use client";
import React, { Suspense, useContext, lazy } from "react";
import { HeightContext } from "../context/HeightContext";
import RollingAnimation from "../components/animaate/RollingAnimation";
const AllChats = lazy(() => import("../components/chat/AllChats"));

const Chat = () => {
  const { screenWidth, loading } = useContext(HeightContext);

  return (
    <>
      {screenWidth > 1025 ? (
        <div
          className="flex align_center justify_center"
          style={{
            height: "100%",
          }}
        >
          <span>TAP ON A MESSAGE TO DISPLAY HERE</span>
        </div>
      ) : (
        <div
          className="scroll_y_black_white"
          style={{
            maxHeight: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            borderRight: "1px solid #757474",
          }}
        >
          <Suspense
            fallback={
              <div style={{ height: "100vh" }}>
                <RollingAnimation />
              </div>
            }
          >
            <AllChats />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Chat;
