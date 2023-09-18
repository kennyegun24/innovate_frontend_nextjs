import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import Overview from "./Overview";

const ProfileAboutNav = () => {
  return (
    <section className="flex gap2rem">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "25%",
        }}
      >
        <p
          className="font14 flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
        >
          <FaCheckCircle /> Overview
        </p>
        <p
          className="font14 flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
        >
          <BsInfo /> Personal Info
        </p>
        <p
          className="font14 flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
        >
          <FaGraduationCap /> Education
        </p>
        <p
          className="font14 flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
        >
          <BiBriefcase /> Experience
        </p>
      </div>
      <div style={{ width: "75%" }}>
        <Overview />
      </div>
    </section>
  );
};

export default ProfileAboutNav;
