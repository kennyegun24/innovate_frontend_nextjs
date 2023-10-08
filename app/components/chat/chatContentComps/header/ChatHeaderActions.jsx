import React, { useEffect, useRef, useState } from "react";
import { BiVideo } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import ChatHeaderOptions from "./ChatHeaderOptions";
import { useHideRef } from "@/app/customHooks/refHook";

const ChatHeaderActions = () => {
  const { showActive, setShowActive, area } = useHideRef();

  return (
    <div className="flex gap05rem column relative" ref={area}>
      <div className="flex gap05rem">
        <BiVideo
          style={{
            fontSize: "22px",
          }}
        />
        <FaEllipsisV
          style={{
            fontSize: "22px",
          }}
          className=" pointer"
          onClick={() =>
            setShowActive((prev) => (prev === true ? false : true))
          }
        />
      </div>
      {showActive && <ChatHeaderOptions />}
    </div>
  );
};

export default ChatHeaderActions;
