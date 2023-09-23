import React, { useState } from "react";
import { BiBriefcase } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { ThemeContext } from "@/app/context/DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileAboutNav = () => {
  const [tab, setTab] = useState(1);
  const pathName = usePathname();
  const nav = [
    {
      icon: <FaCheckCircle />,
      text: "Overview",
      link: "/current_user_profile/about",
      tab: 1,
    },
    {
      icon: <FaGraduationCap />,
      text: "Education",
      link: "/current_user_profile/about/education",
      tab: 3,
    },
    {
      icon: <BiBriefcase />,
      text: "Experience",
      link: "/current_user_profile/about/experience",
      tab: 4,
    },
  ];
  return (
    <section className="flex gap2rem">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        {nav.map((nav) => (
          <Link
            key={nav.tab}
            href={nav.link}
            className={`font14 text_color pointer flex align_center theme gap05rem padding05rem text_decoration_none ${
              pathName === nav.link &&
              "overview_btn_shadow blue_background white"
            }`}
            style={{ borderRadius: "6px" }}
            // onClick={() => setTab(nav.tab)}
          >
            {nav.icon} {nav.text}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProfileAboutNav;
