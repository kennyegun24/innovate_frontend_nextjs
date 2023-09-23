"use client";
import React, { useContext, useState } from "react";
import { FaUsers, FaBlogger, FaBars } from "react-icons/fa";
import { BiHomeHeart, BiShoppingBag, BiMessage } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import styles from "./nav.module.css";
import { ThemeContext } from "@/app/context/DarkMode";
import DarkMode from "../darkMode/DarkMode";
import Link from "next/link";

const NavBar = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const navs = [
    {
      id: 1,
      icon: <BiHomeHeart className={styles.icons} />,
      link: "/feeds",
    },
    {
      id: 2,
      icon: <FaUsers className={styles.icons} />,
      link: "/recommended_users",
    },
    {
      id: 3,
      icon: <BiMessage className={styles.icons} />,
      link: "/chat",
    },
    {
      id: 4,
      icon: <BsBell className={styles.icons} />,
      link: "/notifications",
    },
    {
      id: 5,
      icon: <BiShoppingBag className={styles.icons} />,
      link: "",
    },
    {
      id: 6,
      icon: <SlBriefcase className={styles.icons} />,
      link: "/jobs",
    },
    {
      id: 7,
      icon: <FaBlogger className={styles.icons} />,
      link: "/blog",
    },
  ];

  return (
    <div
      className={`flex justify_between align_center theme ${styles.container} background2`}
    >
      <FaBars
        onClick={() => setShow((prev) => (prev === true ? false : true))}
        className={`${styles.icons} ${styles.hamBurger}`}
      />
      <div
        className={` ${styles.subContainer} ${
          show === true ? styles.show : styles.hide
        } ${mode === "light" ? styles.backLight : styles.backDark}`}
      >
        <div className={`${styles.subContainer2}`}>
          {navs.map((nav) => (
            <Link
              key={nav.id}
              className={`theme ${
                mode === "light" ? styles.dark_text : styles.white_text
              }`}
              href={nav.link}
            >
              {nav.icon}
            </Link>
          ))}
        </div>
        <DarkMode toggle={toggle} mode={mode} />
      </div>
    </div>
  );
};

export default NavBar;
