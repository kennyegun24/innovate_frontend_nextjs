"use client";
import React, { useState } from "react";
import { BiBriefcase } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import Overview from "./Overview";

const ProfileAboutNav = () => {
  const [tab, setTab] = useState(1);
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
          className="font14 pointer flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
          onClick={() => setTab(1)}
        >
          <FaCheckCircle /> Overview
        </p>
        <p
          className="font14 pointer flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
          onClick={() => setTab(2)}
        >
          <BsInfo /> Personal Info
        </p>
        <p
          className="font14 pointer flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
          onClick={() => setTab(3)}
        >
          <FaGraduationCap /> Education
        </p>
        <p
          className="font14 pointer flex align_center gap05rem padding1rem"
          style={{ background: "#111", borderRadius: "6px" }}
          onClick={() => setTab(4)}
        >
          <BiBriefcase /> Experience
        </p>
      </div>
      <div style={{ width: "75%" }}>{tab === 1 && <Overview />}</div>
    </section>
  );
};

export default ProfileAboutNav;
