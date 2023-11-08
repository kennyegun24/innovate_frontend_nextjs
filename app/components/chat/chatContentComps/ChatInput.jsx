import TextArea from "antd/es/input/TextArea";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import styles from "./chat_input.module.css";
import { getURLMetadata } from "@/app/utils/linkPreview";
import Image from "next/image";

import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { mssg } from "@/app/utils/chat/sendMessage";

const ChatInput = ({ uid }) => {
  const [urlLink, setUrlLink] = useState({});
  const [text, setText] = useState("");
  const { data } = useSession();
  const { details } = useSelector((state) => state.unauthUserDetails);
  const currentUserUid = data?.user?.uid;
  // const prevUrlRef = useRef(null);
  const handleTextChange = useCallback((newText) => {
    setText(newText);
    // const _urlRegex = /https:\/\/\S+/gi;
    // const urlPattern = new RegExp(`(${_urlRegex.source})\\s`, "g");
    // const matches = [...newText.matchAll(urlPattern)];
    // if (matches.length > 0) {
    //   const lastMatch = matches[matches.length - 1];
    //   const lastUrl = lastMatch[1].trim();
    //   if (lastUrl !== prevUrlRef.current) {
    //     const fetchData = async () => {
    //       try {
    //         const res = await getURLMetadata(lastUrl);
    //         prevUrlRef.current = lastUrl;
    //         setUrlLink(res ? res : {});
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchData();
    //   }
    // }
  }, []);

  const combineId =
    data?.user?.uid && currentUserUid > details?.uid
      ? currentUserUid + details?.uid
      : details?.uid + currentUserUid;

  const sendMessage = async () => {
    try {
      await mssg({
        combineId,
        text,
        currentUserUid,
        data,
        details,
      });
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex column`}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {Object.entries(urlLink).length > 0 && (
        <div
          className="flex padding05rem background gap05rem"
          style={{ height: "auto" }}
        >
          {urlLink.imageContent && (
            <Image
              height={50}
              width={50}
              alt={urlLink?.titleContent}
              src={urlLink?.imageContent}
              crossOrigin="anonymous"
            />
          )}
          <div>
            <p className="font12">{urlLink?.titleContent}</p>
            <p className="font12">{urlLink?.descriptionContent}</p>
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
          value={text}
        />
        <div className={`${styles.sendIconDiv} background theme pointer`}>
          <BiSend className="font20 auto" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default memo(ChatInput);
