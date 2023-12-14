"use client";
import React, { memo } from "react";
import ChatHeader from "./chatContentComps/ChatHeader";
import ChatInput from "./chatContentComps/ChatInput";
import ChatBody from "./chatContentComps/ChatBody";
import styles from "./chat_content.module.css";

const ChatContent = ({ uid }) => {
  return (
    <div className={styles.chatContentContainer}>
      <div className={`border_bottom ${styles.chatContentChatHeaderContainer}`}>
        <ChatHeader uid={uid} />
      </div>
      <div className={styles.chatContentChatBodyContainer}>
        <ChatBody />
      </div>
      <div className={styles.chatContentChatInputContainer}>
        <ChatInput uid={uid} />
      </div>
    </div>
  );
};

export default memo(ChatContent);
