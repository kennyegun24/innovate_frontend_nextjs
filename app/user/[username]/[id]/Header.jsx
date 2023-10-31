"use client";
import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";
import { usePathname } from "next/navigation";

const Header = ({ id, data }) => {
  const path = usePathname();
  const userName = path.split("/")[2];
  const editProfile = `/user/${userName}/${id}`;
  const feeds = `/user/${userName}/${id}`;
  const about = `/user/${userName}/${id}/about`;
  const friends = `/user/${userName}/${id}/friends`;
  return (
    <div>
      <ProfileHeader
        feeds={feeds}
        about={about}
        friends={friends}
        editProfile={editProfile}
        data={data}
        button={{
          presence: true,
          border: "blue_border",
          background_color: "blue_background",
          color: "white",
        }}
      />
    </div>
  );
};

export default Header;