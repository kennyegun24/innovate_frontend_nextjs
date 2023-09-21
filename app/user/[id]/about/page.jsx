import { otherUserDetails } from "@/app/_mock/user_details";
import ProfileOverview from "@/app/components/profile/profileAbout/ProfileOverview";
import React from "react";

const CurrentUserOverview = ({ params }) => {
  return <ProfileOverview data={otherUserDetails[params.id]} />;
};

export default CurrentUserOverview;
