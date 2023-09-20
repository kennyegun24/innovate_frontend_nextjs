import { friends } from "@/app/_mock/friends";
import ProfileFriends from "@/app/components/profile/ProfileFriends/ProfileFriends";
import React from "react";

const CurrentUserProfileFriends = () => {
  return (
    <div>
      <ProfileFriends data={friends} />
    </div>
  );
};

export default CurrentUserProfileFriends;
