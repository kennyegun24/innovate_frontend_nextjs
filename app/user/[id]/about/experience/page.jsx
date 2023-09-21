import ProfileExperience from "@/app/components/profile/profileAbout/ProfileExperience";
import React from "react";

import { otherUserDetails } from "@/app/_mock/user_details";
const CurrentUserExperience = ({ params }) => {
  return <ProfileExperience data={otherUserDetails[params.id].experience} />;
};

export default CurrentUserExperience;
