"use client";
import { createContext, useState, useEffect } from "react";

export const HeightContext = createContext();

export const HeightProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollY, setScrollY] = useState(100);
  const [element, setElement] = useState(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (element !== null) {
        const scrollTotal = document.querySelector(".landingPage")?.scrollTop;

        setScrollY(scrollTotal);
      } else {
        setScrollY(0);
      }
    };
    handleScroll();

    document
      .querySelector(".landingPage")
      ?.addEventListener("scroll", handleScroll);
    return () => {
      document
        .querySelector(".landingPage")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, [element]);

  return (
    <HeightContext.Provider value={{ screenWidth, scrollY, setElement }}>
      <div>{children}</div>
    </HeightContext.Provider>
  );
};
