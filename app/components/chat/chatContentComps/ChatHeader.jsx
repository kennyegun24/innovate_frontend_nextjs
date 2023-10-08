import { currentUserDetails } from "@/app/_mock/current_user_details";
import Image from "next/image";
import React from "react";
import ChatHeaderActions from "./header/ChatHeaderActions";

const ChatHeader = ({ data }) => {
  const status = {
    // online: true
    online: false,
  };
  return (
    <div className="flex justify_between padding05rem">
      <div className="gap05rem flex">
        <Image
          src={data?.image}
          alt=""
          height={50}
          width={50}
          className="roundedImage object-cover"
        />
        <div className="flex column gap02rem">
          <p className="font14 fontW600">{data?.name}</p>
          {status.online ? (
            <p className="font12 typing_text">Online</p>
          ) : (
            <p className="font12 offline_status fontW600">Offline</p>
          )}
          <p className="font12 typing_text fontW600">Typing...</p>
        </div>
      </div>
      <ChatHeaderActions />
    </div>
  );
};

export default ChatHeader;
