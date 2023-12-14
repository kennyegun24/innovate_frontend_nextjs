import React from "react";
import "@/app/styles/profile_animation.css";

const ProfileAnimation = () => {
  return (
    <div className="card-container">
      <div className="card-container-sm">
        <div className="overview-skelenton">
          <div className="overview-text" />
          <div className="overview-text" />
          <div className="overview-text" />
          <div className="overview-text" />
        </div>
        <div className="post-skeleton">
          <div className="post-image" />
          <div className="post-text" />
          <div className="post-text2" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAnimation;
