"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  const isClient = typeof window === "object";

  const defaultSize = {
    width: 768,
    height: 1024,
  };

  const [windowSize, setWindowSize] = useState(
    isClient
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : defaultSize
  );

  useEffect(() => {
    if (isClient) {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  return windowSize;
}
