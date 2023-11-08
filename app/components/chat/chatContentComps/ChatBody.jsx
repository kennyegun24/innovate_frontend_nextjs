"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import styles from "./chatBody.module.css";
import { currentUserDetails } from "@/app/_mock/current_user_details";
import { _mock_chat_message } from "@/app/_mock/chat_content";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { db } from "@/app/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const ChatBody = () => {
  const { data } = useSession();
  const { details } = useSelector((state) => state.unauthUserDetails);
  const smoothSlide = useRef();
  const currentUserUid = data?.user?.uid;
  const combineId =
    data?.user?.uid && currentUserUid > details?.uid
      ? data?.user?.uid + details?.uid
      : details?.uid + data?.user?.uid;
  const id = currentUserUid;

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (combineId && data?.user?.uid) {
      const unsub = onSnapshot(doc(db, "chats", combineId), (doc) => {
        console.log(doc.data());
        setMessages(doc.data()?.messages || []);
      });
      // unsub();
      return () => {
        unsub();
      };
    }
  }, [combineId, data?.user?.uid, details?.uid]);

  useEffect(() => {
    smoothSlide.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="scroll_y_black_white padding05rem flex column gap1rem"
      style={{
        maxHeight: "100%",
      }}
    >
      {messages.map((chat, index) => (
        <div
          key={index}
          className="white-space flex width100"
          style={{
            flexDirection: chat.senderId === id ? "row-reverse" : "row",
          }}
          ref={smoothSlide}
        >
          <div
            className="background theme width_fit padding05rem "
            style={{
              borderRadius:
                chat.senderId === id ? "6px 6px 0 6px" : "6px 6px 6px 0",
              maxWidth: "80%",
            }}
          >
            <p className=" font12">{chat.text}</p>
            <p
              className="font10 opacity05"
              style={{
                textAlign: chat.senderId === id ? "right" : "left",
                paddingTop: "0.5rem",
              }}
            >
              {chat.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ChatBody);
