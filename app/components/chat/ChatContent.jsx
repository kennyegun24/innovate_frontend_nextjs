"use client";
import React, { useEffect, useState } from "react";
import { _mock_chat_message } from "@/app/_mock/chat_content";
import ChatHeader from "./chatContentComps/ChatHeader";
import ChatInput from "./chatContentComps/ChatInput";
import ChatBody from "./chatContentComps/ChatBody";
import styles from "./chat_content.module.css";
import { notFound, usePathname } from "next/navigation";
import { otherUserDetails } from "@/app/_mock/user_details";

const ChatContent = () => {
  const path = usePathname();
  const id = path.split("/")[2];
  const [otherUser, setOtherUser] = useState({});
  useEffect(() => {
    try {
      setOtherUser(otherUserDetails[id]);
    } catch {}
    otherUser === undefined && notFound();
  }, [id, otherUser]);
  return (
    <div className={styles.chatContentContainer}>
      <div className={`border_bottom ${styles.chatContentChatHeaderContainer}`}>
        <ChatHeader data={otherUser} />
      </div>
      <div className={styles.chatContentChatBodyContainer}>
        <ChatBody />
      </div>
      <div className={styles.chatContentChatInputContainer}>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatContent;
