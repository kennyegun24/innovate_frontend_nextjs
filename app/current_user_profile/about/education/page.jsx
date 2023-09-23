import { currentUserEducation } from "@/app/_mock/current_user_education";
import ProfileEducation from "@/app/components/profile/profileAbout/ProfileEducation";
import React from "react";

const CurrentUserEducation = () => {
  return <ProfileEducation data={currentUserEducation} />;
};

export default CurrentUserEducation;
