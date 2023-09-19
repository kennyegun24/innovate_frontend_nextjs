import { currentUserExperience } from "@/app/_mock/current_user_experience";
import ProfileExperience from "@/app/components/profile/profileAbout/ProfileExperience";
import React from "react";

const Education = () => {
  return <ProfileExperience data={currentUserExperience} />;
};

export default Education;
