"use client";
import React, { memo, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "antd/es/input/Search";
import { db } from "@/app/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { MessageNotificationContext } from "@/app/context/MessageNotification";

const AllChats = () => {
  const [users, setUsers] = useState({});
  const { socket, user_details } = useContext(MessageNotificationContext);

  useEffect(() => {
    const getMessage = () => {
      socket.current?.on("receive_message", (data) => {
        setUsers((prevUsers) => {
          const updatedUser = { ...prevUsers[data?.chat_id] }; // Create a shallow copy of the specific user
          updatedUser.lastMessage.text = data?.message;
          updatedUser.date = Date.now();

          return {
            ...prevUsers,
            [data?.chat_id]: updatedUser, // Update the specific user in the state
          };
        });
      });
    };
    getMessage();
    return () => {
      getMessage();
    };
    /* eslint-disable */
  }, []);

  useEffect(() => {
    if (user_details?.user?.uid) {
      const getChats = async () => {
        const docRef = doc(db, "userchat", user_details?.user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsers(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      };
      getChats();
    }
  }, [user_details?.user?.uid]);

  if (!user_details?.user?.uid) return;

  return (
    <div className="flex column gap05rem ">
      <div
        className="padding1rem background_transparent"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999999,
        }}
      >
        <Search placeholder="Search users..." />
      </div>
      {Object.entries(users)
        .sort((a, b) => b[1]?.date - a[1]?.date)
        .map((user, index) => {
          return (
            <div className="padding05rem flex column gap05rem" key={user[0]}>
              <Link
                href={`/chat/${user[1]?.userInfo.displayName}/${user[1]?.userInfo.uid}`}
                className="flex gap05rem text_decoration_none text_color"
              >
                <Image
                  src={user[1]?.userInfo?.photoURL}
                  alt=""
                  width={40}
                  height={40}
                  className="roundedImage object-cover"
                />
                <div
                  className="flex column gap02rem"
                  style={{
                    flex: 1,
                  }}
                >
                  <p className="font12">
                    {user[1]?.userInfo?.displayName?.length >= 12
                      ? user[1]?.userInfo?.displayName?.slice(0, 12) + "..."
                      : user[1]?.userInfo?.displayName}
                  </p>
                  <p className="font10">
                    {user[1]?.lastMessage?.text?.length >= 25
                      ? user[1]?.lastMessage?.text?.slice(0, 25) + "..."
                      : user[1]?.lastMessage?.text}
                  </p>
                  <p className="font10 opacity05">
                    {new Date(
                      user[1]?.date?.seconds
                        ? user[1].date?.seconds * 1000
                        : user[1].date
                    ).toLocaleString()}
                  </p>
                </div>
              </Link>
              <hr className="hr" />
            </div>
          );
        })}
    </div>
  );
};

export default memo(AllChats);
