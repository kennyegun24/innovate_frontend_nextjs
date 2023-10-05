"use client";
import { createContext, useState, useEffect } from "react";

export const HeightContext = createContext();

export const HeightProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(600);

  useEffect(() => {
    // Function to update screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial screen width
    updateScreenWidth();
    console.log("fskdjs");

    // Attach event listener to window resize event
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <HeightContext.Provider value={{ screenWidth }}>
      <div>{children}</div>
    </HeightContext.Provider>
  );
};
