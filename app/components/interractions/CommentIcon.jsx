import React from "react";
import { FaComment } from "react-icons/fa";

const CommentIcon = () => {
  return (
    <div
      style={{
        background: "#5596e6",
        borderRadius: "50%",
        padding: "0.5rem",
        width: "2rem",
        height: "2rem",
      }}
      className="pointer like_comment_btn"
    >
      <FaComment className="white" />
    </div>
  );
};

export default CommentIcon;
