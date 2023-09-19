import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";
import { currentUserDetails } from "../_mock/current_user_details";

const Header = () => {
  return (
    <div>
      <ProfileHeader data={currentUserDetails} />
    </div>
  );
};

export default Header;
