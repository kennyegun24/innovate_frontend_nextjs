"use client";

import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";
import { usePathname } from "next/navigation";
import { otherUserDetails } from "@/app/_mock/user_details";

const Header = () => {
  const pathId = usePathname().split("/")[2];
  const editProfile = `/user/${pathId}`;
  const feeds = `/user/${pathId}`;
  const about = `/user/${pathId}/about`;
  const friends = `/user/${pathId}/friends`;
  return (
    <div>
      <ProfileHeader
        feeds={feeds}
        about={about}
        friends={friends}
        editProfile={editProfile}
        data={otherUserDetails[pathId]}
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
