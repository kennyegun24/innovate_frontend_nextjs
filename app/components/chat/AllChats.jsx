"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "antd/es/input/Search";
import { db } from "@/app/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";

const AllChats = () => {
  const { data } = useSession();
  const [users, setUsers] = useState({});

  useEffect(() => {
    if (data?.user?.uid) {
      const getChats = () => {
        const unsub = onSnapshot(
          doc(db, "userchat", data?.user?.uid),
          (doc) => {
            setUsers(doc.data() || {});
          }
        );
        return () => {
          unsub();
        };
      };
      data?.user?.uid && getChats();

      return () => {
        getChats(); // Unsubscribe from the snapshot listener when the component unmounts
      };
    }
  }, [data?.user?.uid]);
  if (!data?.user?.uid) return;
  // let foundIndex = Object.entries(users).findIndex((e) => e[0] === "iamkenny");
  // if (foundIndex !== -1) {
  //   Object.entries(users)[foundIndex][1].userInfo.receiver_id = "non";
  // }
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
                    {new Date(user[1].date?.seconds * 1000).toLocaleString()}
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
