import React from "react";
import { BiCamera, BiVideo } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";

const ChatHeaderElippse = () => {
  return (
    <div className="flex gap05rem">
      <BiVideo className="font16" />
      <FaEllipsisV className="font16" />
    </div>
  );
};

export default ChatHeaderElippse;
