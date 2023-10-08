"use client";
import { useState, useEffect, useRef } from "react";

export function useHideRef() {
  const [showActive, setShowActive] = useState(false);
  const area = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (area.current && !area.current.contains(event.target)) {
        setShowActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return {
    showActive,
    area,
    setShowActive,
  };
}
