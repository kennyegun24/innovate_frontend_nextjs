import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";
import { currentUserDetails } from "../_mock/current_user_details";

const Header = () => {
  const editProfile = `/current_user_profile`;
  const feeds = `/current_user_profile`;
  const about = `/current_user_profile/about`;
  const friends = `/current_user_profile/friends`;
  return (
    <div>
      <ProfileHeader
        data={currentUserDetails}
        feeds={feeds}
        about={about}
        friends={friends}
        editProfile={editProfile}
      />
    </div>
  );
};

export default Header;
