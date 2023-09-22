import { ThemeContext } from "@/app/context/DarkMode";
import React, { useContext } from "react";
import { FaComment } from "react-icons/fa";

const CommentIcon = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: "#5596e6",
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
      <FaComment
        // style={{
        //   // margin: "auto",
        //   // width: "fit-content",
        //   color: "red",
        // }}
        className="white"
      />
    </div>
  );
};

export default CommentIcon;
