"use client";
import { currentUserEducation } from "@/app/_mock/current_user_education";
import ProfileEducation from "@/app/components/profile/profileAbout/ProfileEducation";
import React from "react";
import { usePathname } from "next/navigation";
import { otherUserDetails } from "@/app/_mock/user_details";

const CurrentUserEducation = () => {
  const pathId = usePathname().split("/")[2];
  return <ProfileEducation data={otherUserDetails[pathId].education} />;
};

export default CurrentUserEducation;
