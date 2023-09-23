import { currentUserDetails } from "@/app/_mock/current_user_details";
import ProfileOverview from "@/app/components/profile/profileAbout/ProfileOverview";
import React from "react";

const CurrentUserOverview = () => {
  return <ProfileOverview data={currentUserDetails} />;
};

export default CurrentUserOverview;
