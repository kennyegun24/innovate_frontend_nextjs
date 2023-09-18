"use client";
import React, { useContext, useState } from "react";
import { BiBriefcase } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import Overview from "./Overview";
import { ThemeContext } from "@/app/context/DarkMode";

const ProfileAboutNav = () => {
  const [tab, setTab] = useState(1);
  const { mode } = useContext(ThemeContext);
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
          className={`font14 pointer flex align_center theme gap05rem padding1rem ${
            mode === "light" && tab !== 1
              ? "light_background dark_text"
              : mode === "dark" && tab !== 1
              ? "dark_2_background light_text"
              : tab === 1 && "blue_background white"
          }`}
          style={{ borderRadius: "6px" }}
          onClick={() => setTab(1)}
        >
          <FaCheckCircle /> Overview
        </p>
        <p
          className={`font14 pointer flex align_center theme gap05rem padding1rem ${
            mode === "light" && tab !== 2
              ? "light_background dark_text"
              : mode === "dark" && tab !== 2
              ? "dark_2_background light_text"
              : tab === 2 && "blue_background white"
          }`}
          style={{ borderRadius: "6px" }}
          onClick={() => setTab(2)}
        >
          <BsInfo /> Personal Info
        </p>
        <p
          className={`font14 pointer flex align_center theme gap05rem padding1rem ${
            mode === "light" && tab !== 3
              ? "light_background dark_text"
              : mode === "dark" && tab !== 3
              ? "dark_2_background light_text"
              : tab === 3 && "blue_background white"
          }`}
          style={{ borderRadius: "6px" }}
          onClick={() => setTab(3)}
        >
          <FaGraduationCap /> Education
        </p>
        <p
          className={`font14 pointer flex align_center theme gap05rem padding1rem ${
            mode === "light" && tab !== 4
              ? "light_background dark_text"
              : mode === "dark" && tab !== 4
              ? "dark_2_background light_text"
              : tab === 4 && "blue_background white"
          }`}
          style={{ borderRadius: "6px" }}
          onClick={() => setTab(4)}
        >
          <BiBriefcase /> Experience
        </p>
      </div>
      <div style={{ width: "75%" }}>
        {tab === 1 && <Overview mode={mode} />}
      </div>
    </section>
  );
};

export default ProfileAboutNav;
