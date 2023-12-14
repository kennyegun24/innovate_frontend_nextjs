"use client";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { _mock_chat_message } from "@/app/_mock/chat_content";
import { useSelector } from "react-redux";
import { db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { MessageNotificationContext } from "@/app/context/MessageNotification";

const ChatBody = () => {
  const { user_details, newMessage } = useContext(MessageNotificationContext);
  const { details } = useSelector((state) => state.unauthUserDetails);
  const smoothSlide = useRef();
  const currentUserUid = user_details?.user?.uid;
  const combineId =
    user_details?.user?.uid && currentUserUid > details?.uid
      ? currentUserUid + details?.uid
      : details?.uid + currentUserUid;
  const id = currentUserUid;

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (combineId && user_details?.user?.uid) {
      const getChats = async () => {
        const docRef = doc(db, "chats", combineId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMessages(docSnap.data()?.messages || []);
        } else {
          console.log("No such document!");
        }
      };
      getChats();
    }
  }, [combineId, user_details?.user?.uid]);

  useEffect(() => {
    if (newMessage) console.log(newMessage);
    setMessages((prevChats) => {
      const date = new Date();
      const dateString = date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      return [
        ...prevChats,
        {
          senderId: newMessage?.to_sender,
          text: newMessage?.message,
          time: dateString,
        },
      ];
    });
  }, [newMessage]);

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
