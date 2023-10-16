"use client";
import { createContext, useState, useEffect } from "react";

export const HeightContext = createContext();

export const HeightProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

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
