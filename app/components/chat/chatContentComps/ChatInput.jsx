import { Button, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { BiSend } from "react-icons/bi";

const ChatInput = () => {
  return (
    <div className="flex">
      <TextArea
        style={{ resize: "none", width: "90%", height: "100%" }}
        color="red"
      />
      <div
        style={{
          width: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // height: "100%",
          borderRadius: "6px",
        }}
        className="background theme pointer"
      >
        <BiSend className="font20 auto" />
      </div>
    </div>
  );
};

export default ChatInput;
