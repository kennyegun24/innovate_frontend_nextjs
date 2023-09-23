"use client";
import React from "react";
import ProfileAboutNav from "./ProfileAboutNav";

const AboutLayout = ({ children }) => {
  return (
    <div className="flex gap2rem">
      <div style={{ width: "30%" }}>
        <ProfileAboutNav />
      </div>
      <div style={{ width: "65%" }}>{children}</div>
    </div>
  );
};

export default AboutLayout;
