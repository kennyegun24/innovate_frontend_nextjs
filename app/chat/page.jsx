"use client";
import React, { useEffect, useState } from "react";
import AllChats from "../components/chat/AllChats";

const Chat = () => {
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
  return (
    <>
      {screenWidth > 600 ? (
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
          className="scroll_y"
          style={{
            maxHeight: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            borderRight: "1px solid #757474",
          }}
        >
          <AllChats />
        </div>
      )}
    </>
  );
};

export default Chat;
