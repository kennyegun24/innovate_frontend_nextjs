import React, { useEffect, useRef, useState } from "react";
import { BiVideo } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import ChatHeaderOptions from "./ChatHeaderOptions";

const ChatHeaderActions = () => {
  const [show, setShow] = useState(false);
  const area = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (area.current && !area.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap05rem column relative" ref={area}>
      <div className="flex gap05rem">
        <BiVideo className="font20" />
        <FaEllipsisV
          className="font20 pointer"
          onClick={() => setShow((prev) => (prev === true ? false : true))}
        />
      </div>
      {show && <ChatHeaderOptions />}
    </div>
  );
};

export default ChatHeaderActions;
