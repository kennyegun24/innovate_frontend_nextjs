"use client";
import React, { useContext } from "react";
import { FaUsers, FaBlogger, FaBars } from "react-icons/fa";
import { BiHomeHeart, BiShoppingBag, BiMessage } from "react-icons/bi";
import { ThemeContext } from "@/app/context/DarkMode";
import { BsBell } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHideRef } from "@/app/customHooks/refHook";
import { SettingTwoTone } from "@ant-design/icons";

const NavBar = () => {
  const { mode } = useContext(ThemeContext);
  const path = usePathname();
  const navs = [
    {
      id: 1,
      icon: <BiHomeHeart className={styles.icons} />,
      link: "/feeds",
      label: "Feeds",
    },
    {
      id: 2,
      icon: <FaUsers className={styles.icons} />,
      link: "/recommended_users",
      label: "Users",
    },
    {
      id: 3,
      icon: <BiMessage className={styles.icons} />,
      link: "/chat",
      label: "Chat",
    },
    {
      id: 4,
      icon: <BsBell className={styles.icons} />,
      link: "/notifications",
      label: "Notification",
    },
    {
      id: 5,
      icon: <BiShoppingBag className={styles.icons} />,
      link: "",
      label: "Store",
    },
    {
      id: 6,
      icon: <SlBriefcase className={styles.icons} />,
      link: "/jobs",
      label: "Jobs",
    },
    {
      id: 7,
      icon: <FaBlogger className={styles.icons} />,
      link: "/blog",
      label: "Blogs",
    },
    {
      id: 8,
      icon: <SettingTwoTone className={styles.icons} />,
      link: "/settings",
      label: "Settings",
    },
  ];
  const { setShowActive, area, showActive } = useHideRef();
  return (
    <div
      ref={area}
      className={`flex justify_between align_center theme ${styles.container} navTransparent`}
    >
      <FaBars
        onClick={() => setShowActive((prev) => (prev === true ? false : true))}
        className={`${styles.icons} ${styles.hamBurger}`}
      />
      <div
        className={` ${styles.subContainer} ${
          showActive === true ? styles.show : styles.hide
        } ${mode === "light" ? styles.backLight : styles.backDark}`}
      >
        <div className={`${styles.subContainer2}`}>
          {navs.map((nav) => (
            <Link
              key={nav.id}
              className={`theme flex gap05rem align_center text_decoration_none ${
                path === nav.link && "blue"
              } ${mode === "light" ? styles.dark_text : styles.white_text} ${
                styles.links
              }`}
              href={nav.link}
            >
              {nav.icon}
              <p className={styles.navLabel}>{nav.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
