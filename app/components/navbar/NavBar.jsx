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
// import { ThemeContext } from "@/context/DarkMode";

const NavBar = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  return (
    <div
      className={`flex justify_between align_center theme ${styles.container} ${
        mode === "light" ? "light_background" : "dark_2_background"
      }`}
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
          <Link
            className={`theme ${
              mode === "light" ? styles.dark_text : styles.white_text
            }`}
            href="/feeds"
          >
            <BiHomeHeart className={styles.icons} />
          </Link>
          <Link
            className={`theme ${
              mode === "light" ? styles.dark_text : styles.white_text
            }`}
            href="/recommended_users"
          >
            <FaUsers className={styles.icons} />
          </Link>
          <Link
            className={`theme ${
              mode === "light" ? styles.dark_text : styles.white_text
            }`}
            href="/chat"
          >
            <BiMessage className={styles.icons} />
          </Link>
          <Link
            className={`theme ${
              mode === "light" ? styles.dark_text : styles.white_text
            }`}
            href="/notifications"
          >
            <BsBell className={styles.icons} />
          </Link>
          <BiShoppingBag className={styles.icons} />
          <Link
            className={`theme ${
              mode === "light" ? styles.dark_text : styles.white_text
            }`}
            href="/jobs"
          >
            <SlBriefcase className={styles.icons} />
          </Link>
          <Link
            className={`theme ${
              mode === "light" ? styles.dark_text : styles.white_text
            }`}
            href="/blog"
          >
            <FaBlogger className={styles.icons} />
          </Link>
        </div>
        <DarkMode toggle={toggle} mode={mode} />
      </div>
    </div>
  );
};

export default NavBar;
