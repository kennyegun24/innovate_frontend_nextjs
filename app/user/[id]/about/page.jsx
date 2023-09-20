"use client";
import { usePathname } from "next/navigation";
import { otherUserDetails } from "@/app/_mock/user_details";
import ProfileOverview from "@/app/components/profile/profileAbout/ProfileOverview";
import React from "react";

const CurrentUserOverview = () => {
  const pathId = usePathname().split("/")[2];
  return <ProfileOverview data={otherUserDetails[pathId]} />;
};

export default CurrentUserOverview;
