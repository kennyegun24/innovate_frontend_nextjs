import React from "react";
import { _mock_all_chats } from "@/app/_mock/all_message";
import Image from "next/image";
import { convertTime } from "@/app/helpers/general";

const AllChats = () => {
  return (
    <div className="flex column gap05rem">
      {_mock_all_chats.map((user, index) => (
        <>
          <div key={index} className="flex gap05rem">
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
                {user.last_message.length >= 40
                  ? user.last_message.slice(0, 40) + "..."
                  : user.last_message}
              </p>
              <p className="font10 opacity05">{convertTime(user.time)}</p>
            </div>
          </div>
          <hr className="hr" />
        </>
      ))}
    </div>
  );
};

export default AllChats;
