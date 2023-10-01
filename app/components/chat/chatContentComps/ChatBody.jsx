import React from "react";
import styles from "./chatBody.module.css";
import { currentUserDetails } from "@/app/_mock/current_user_details";
import { _mock_chat_message } from "@/app/_mock/chat_content";

const ChatBody = () => {
  const { id } = currentUserDetails;
  return (
    <div
      className="scroll_y padding05rem flex column gap1rem"
      style={{
        maxHeight: "100%",
      }}
    >
      {_mock_chat_message.map((chat, index) => (
        <div
          key={Math.floor(Math.random() * 9999)}
          className="white-space flex width100"
          style={{
            flexDirection: chat.sender_id === id ? "row-reverse" : "row",
          }}
        >
          <div
            className="background width_fit padding05rem "
            style={{
              borderRadius:
                chat.sender_id === id ? "6px 6px 0 6px" : "6px 6px 6px 0",
              maxWidth: "70%",
            }}
          >
            <p className=" font12">{chat.message}</p>
            <p
              className="font10"
              style={{ textAlign: chat.sender_id === id ? "right" : "left" }}
            >
              {chat.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
