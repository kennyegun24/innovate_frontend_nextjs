import { ThemeContext } from "@/app/context/DarkMode";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";

const LikeIcon = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "50%",
        padding: "0.5rem",
        width: "2rem",
        height: "2rem",
        boxShadow:
          mode === "light"
            ? "0px 5px 20px rgba(32,40,54,0.4)"
            : "0px 5px 20px rgba(86,151,230,0.4)",
      }}
      className="pointer"
    >
      <FaHeart
        style={{
          color: "red",
        }}
      />
    </div>
  );
};

export default LikeIcon;
