"use client";
import { currentUserExperience } from "@/app/_mock/current_user_experience";
import ProfileExperience from "@/app/components/profile/profileAbout/ProfileExperience";
import React from "react";

import { otherUserDetails } from "@/app/_mock/user_details";
import { usePathname } from "next/navigation";
const CurrentUserExperience = () => {
  const pathId = usePathname().split("/")[2];
  return <ProfileExperience data={otherUserDetails[pathId].experience} />;
};

export default CurrentUserExperience;
