"use client";
import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ProfileHeaderAnimation from "@/app/components/animaate/ProfileHeaderAnimation";

const Header = ({ id }) => {
  const { details, loading } = useSelector((state) => state.unauthUserDetails);
  const path = usePathname();
  const userName = path.split("/")[2];
  const editProfile = `/user/${userName}/${id}`;
  const feeds = `/user/${userName}/${id}`;
  const about = `/user/${userName}/${id}/about`;
  const friends = `/user/${userName}/${id}/friends`;
  return (
    <div>
      {loading ? (
        <ProfileHeaderAnimation />
      ) : (
        <ProfileHeader
          feeds={feeds}
          about={about}
          friends={friends}
          editProfile={editProfile}
          data={details}
          button={{
            presence: true,
            border: "blue_border",
            background_color: "blue_background",
            color: "white",
          }}
        />
      )}
    </div>
  );
};

export default Header;
