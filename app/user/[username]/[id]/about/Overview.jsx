"use client";
import ProfileOverview from "@/app/components/profile/profileAbout/ProfileOverview";
import React from "react";
import { useSelector } from "react-redux";

const Overview = ({ id }) => {
  const { details } = useSelector((state) => state.unauthUserDetails);
  return <ProfileOverview data={details} />;
};

export default Overview;
