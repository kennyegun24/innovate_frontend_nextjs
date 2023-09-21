import ProfileEducation from "@/app/components/profile/profileAbout/ProfileEducation";
import React from "react";
import { otherUserDetails } from "@/app/_mock/user_details";

const CurrentUserEducation = ({ params }) => {
  return <ProfileEducation data={otherUserDetails[params.id].education} />;
};

export default CurrentUserEducation;
