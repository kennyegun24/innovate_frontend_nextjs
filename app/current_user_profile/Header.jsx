import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";

const Header = ({ mode }) => {
  return (
    <div>
      <ProfileHeader mode={mode} />
    </div>
  );
};

export default Header;
