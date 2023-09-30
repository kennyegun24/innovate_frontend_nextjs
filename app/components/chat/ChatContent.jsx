import React from "react";
import { _mock_chat_message } from "@/app/_mock/chat_content";
import ChatHeader from "./chatContentComps/ChatHeader";
import ChatInput from "./chatContentComps/ChatInput";
import ChatBody from "./chatContentComps/ChatBody";
import styles from "./chat_content.module.css";

const ChatContent = () => {
  return (
    <div className={styles.chatContentContainer}>
      <div className={styles.chatContentChatHeaderContainer}>
        <ChatHeader />
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
