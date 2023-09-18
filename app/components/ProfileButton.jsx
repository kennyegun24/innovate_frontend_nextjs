"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/DarkMode";

const ProfileButton = ({ text }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <button
      className={`theme ${
        mode === "light"
          ? "light_background dark_text light_border"
          : "dark_border dark_2_background light_text"
      }`}
      style={{ borderRadius: "6px", padding: "0.5rem 1rem" }}
    >
      {text}
    </button>
  );
};

export default ProfileButton;
