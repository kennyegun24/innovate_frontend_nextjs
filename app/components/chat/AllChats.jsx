import React from "react";
import { _mock_all_chats } from "@/app/_mock/all_message";
import Image from "next/image";
import Link from "next/link";
import Search from "antd/es/input/Search";

const AllChats = () => {
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
      {_mock_all_chats.map((user, index) => (
        <div className="padding05rem flex column gap05rem" key={index}>
          <Link
            href={`/chat/${user.sender_id}/${user.chat_id}`}
            className="flex gap05rem text_decoration_none text_color"
          >
            <Image
              src={user.image}
              alt=""
              width={50}
              height={50}
              className="roundedImage object-cover"
            />
            <div
              className="flex column gap02rem"
              style={{
                flex: 1,
              }}
            >
              <p className="font14">{user.display_name}</p>
              <p className="font12">
                {user.last_message.length >= 60
                  ? user.last_message.slice(0, 60) + "..."
                  : user.last_message}
              </p>
              <p className="font10 opacity05">{user.time}</p>
            </div>
          </Link>
          <hr className="hr" />
        </div>
      ))}
    </div>
  );
};

export default AllChats;
