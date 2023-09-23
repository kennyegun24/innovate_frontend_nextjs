import { FollowedContext } from "@/app/context/FollowedContext";
import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeIcon = ({ isLiked }) => {
  const { toggle, setAction } = useContext(FollowedContext);
  const [liked, setLiked] = useState(isLiked);
  return (
    <div
      style={{
        background: liked === true ? "red" : "#fff",
        borderRadius: "50%",
        padding: "0.5rem",
        width: "2rem",
        height: "2rem",
      }}
      className="pointer like_comment_btn"
      onClick={() => {
        toggle();
        liked ? setAction("Post unliked") : setAction("Post liked");
        setLiked((prev) => (prev === true ? false : true));
      }}
    >
      <FaHeart
        style={{
          color: liked === true ? "#fff" : "red",
        }}
      />
    </div>
  );
};

export default LikeIcon;
