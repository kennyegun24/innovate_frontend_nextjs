"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/DarkMode";

const ProfileButton = ({ text }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <button
      className={"theme background2 text_color border pointer"}
      style={{ borderRadius: "6px", padding: "0.5rem 1rem" }}
    >
      {text}
    </button>
  );
};

export default ProfileButton;
