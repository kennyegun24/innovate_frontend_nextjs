import { ThemeContext } from "@/app/context/DarkMode";
import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PageFollowed = ({ action }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        width: "240px",
      }}
      className={`padding1rem flex gap1rem ${
        mode === "light"
          ? "dark_2_background light_text"
          : "light_background dark_text"
      }`}
    >
      <FaCheckCircle className="font20" />
      <p className="font12 fontW600"> {action}</p>
    </div>
  );
};

export default PageFollowed;
