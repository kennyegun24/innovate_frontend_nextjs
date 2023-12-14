"use client";
import ChatContent from "@/app/components/chat/ChatContent";
import React from "react";

const UserChat = ({ params }) => {
  const { chatId } = params;
  return (
    <div style={{ height: "100%" }}>
      <ChatContent uid={chatId} />
    </div>
  );
};

export default UserChat;
