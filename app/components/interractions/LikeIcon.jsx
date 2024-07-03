import React, { useContext, useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { InterractionContext } from "@/app/context/InterractionContext";
import { likePost } from "@/app/utils/publicRequest";
import { useSession } from "next-auth/react";

const LikeIcon = ({ isLiked, post_id }) => {
  const { toggleInterraction } = useContext(InterractionContext);
  const [liked, setLiked] = useState(isLiked);
  const { data } = useSession();
  const handleClick = async () => {
    try {
      await likePost({
        token: data?.user?.token,
        post_id,
      });
      toggleInterraction({
        word: liked === true ? "Post unliked" : `Post liked`,
        placement: "bottomRight",
        type: "success",
        message: "Post interraction",
      });
      setLiked((prev) => (prev === true ? false : true));
    } catch (error) {}
  };

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
      onClick={handleClick}
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
