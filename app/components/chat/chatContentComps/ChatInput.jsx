import { Button, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { BiSend } from "react-icons/bi";
import styles from "./chat_input.module.css";

const ChatInput = () => {
  return (
    <div
      className={`flex`}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TextArea
        style={{ resize: "none" }}
        color="red"
        className={styles.textareaDiv}
      />
      <div className={`${styles.sendIconDiv} background theme pointer`}>
        <BiSend className="font20 auto" />
      </div>
    </div>
  );
};

export default ChatInput;
