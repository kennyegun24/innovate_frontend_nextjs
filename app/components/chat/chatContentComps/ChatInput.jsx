import { Button, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import styles from "./chat_input.module.css";
import { getURLMetadata } from "@/app/utils/linkPreview";
import Image from "next/image";

const ChatInput = () => {
  const [data, setData] = useState({});
  const prevUrlRef = useRef(null);
  const handleTextChange = useCallback((newText) => {
    const _urlRegex = /https:\/\/\S+/gi;
    const urlPattern = new RegExp(`(${_urlRegex.source})\\s`, "g");
    const matches = [...newText.matchAll(urlPattern)];
    if (matches.length > 0) {
      const lastMatch = matches[matches.length - 1];
      const lastUrl = lastMatch[1].trim();
      if (lastUrl !== prevUrlRef.current) {
        const fetchData = async () => {
          try {
            const res = await getURLMetadata(lastUrl);
            prevUrlRef.current = lastUrl;
            setData(res ? res : {});
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }
    }
  }, []);

  return (
    <div
      className={`flex column`}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {Object.entries(data).length > 0 && (
        <div
          className="flex padding05rem background gap05rem"
          style={{ height: "auto" }}
        >
          {data.imageContent && (
            <Image
              height={50}
              width={50}
              alt={data?.titleContent}
              src={data?.imageContent}
              crossOrigin="anonymous"
            />
          )}
          <div>
            <p className="font12">{data?.titleContent}</p>
            <p className="font12">{data?.descriptionContent}</p>
          </div>
        </div>
      )}
      <div
        className={`flex`}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TextArea
          onChange={(e) => handleTextChange(e.target.value)}
          style={{ resize: "none" }}
          color="red"
          className={styles.textareaDiv}
        />
        <div className={`${styles.sendIconDiv} background theme pointer`}>
          <BiSend className="font20 auto" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
