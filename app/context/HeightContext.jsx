"use client";
import { createContext, useState, useEffect } from "react";

export const HeightContext = createContext();

export const HeightProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
      setLoading(false);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <HeightContext.Provider value={{ screenWidth, loading }}>
      <div>{children}</div>
    </HeightContext.Provider>
  );
};
