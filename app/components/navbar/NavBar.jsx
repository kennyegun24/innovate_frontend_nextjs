"use client";
import React, { useContext, useState } from "react";
import { FaUsers, FaBlogger, FaBars } from "react-icons/fa";
import { BiHomeHeart, BiShoppingBag, BiMessage } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import styles from "./nav.module.css";
import { ThemeContext } from "@/app/context/DarkMode";
import DarkMode from "../darkMode/DarkMode";
// import { ThemeContext } from "@/context/DarkMode";

const NavBar = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  return (
    <div className={`flex justify_between align_center ${styles.container}`}>
      <FaBars
        onClick={() => setShow((prev) => (prev === true ? false : true))}
        className={`${styles.icons} ${styles.hamBurger}`}
      />
      <div
        className={` ${styles.subContainer} ${
          show === true ? styles.show : styles.hide
        } ${mode === "light" ? styles.backLight : styles.backDark}`}
      >
        <div className={styles.subContainer2}>
          <BiHomeHeart className={styles.icons} />
          <FaUsers className={styles.icons} />
          <BiMessage className={styles.icons} />
          <BsBell className={styles.icons} />
          <BiShoppingBag className={styles.icons} />
          <SlBriefcase className={styles.icons} />
          <FaBlogger className={styles.icons} />
        </div>
        <DarkMode toggle={toggle} mode={mode} />
      </div>
    </div>
  );
};

export default NavBar;
