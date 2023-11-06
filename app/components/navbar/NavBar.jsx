"use client";
import React, { useContext } from "react";
import { FaUsers, FaBlogger, FaBars, FaSearch } from "react-icons/fa";
import { BiHomeHeart, BiShoppingBag, BiMessage } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHideRef } from "@/app/customHooks/refHook";
import { SettingTwoTone } from "@ant-design/icons";
import { LanguageContext } from "@/app/context/LanguageProvider";

const NavBar = () => {
  const path = usePathname();
  const { switchLanguage, translateText, language } =
    useContext(LanguageContext);
  const _language = (param) => {
    return translateText("nav." + param);
  };
  const navs = [
    {
      id: 1,
      icon: <BiHomeHeart className={styles.icons} />,
      link: "/feeds",
      label: _language("fds") || "Feeds",
    },
    {
      id: 2,
      icon: <FaUsers className={styles.icons} />,
      link: "/recommended_users",
      label: _language("urs") || "Users",
    },
    {
      id: 3,
      icon: <FaSearch className={styles.icons} />,
      link: "/search",
      label: _language("srh") || "Search",
    },
    {
      id: 4,
      icon: <BiMessage className={styles.icons} />,
      link: "/chat",
      label: _language("cht") || "Chats",
    },
    {
      id: 5,
      icon: <BsBell className={styles.icons} />,
      link: "/notifications",
      label: _language("ntftn") || "Notification",
    },
    {
      id: 6,
      icon: <BiShoppingBag className={styles.icons} />,
      link: "/store",
      label: _language("str") || "Store",
    },
    {
      id: 7,
      icon: <SlBriefcase className={styles.icons} />,
      link: "/jobs",
      label: _language("job") || "Jobs",
    },
    {
      id: 8,
      icon: <FaBlogger className={styles.icons} />,
      link: "/blog",
      label: _language("blg") || "Blogs",
    },
    {
      id: 9,
      icon: <SettingTwoTone className={styles.icons} />,
      link: "/settings",
      label: _language("sttn") || "Settings",
    },
  ];
  const { setShowActive, area, showActive } = useHideRef();
  return (
    <div
      ref={area}
      className={`flex justify_between background align_center theme ${styles.container}`}
    >
      <FaBars
        onClick={() => setShowActive((prev) => (prev === true ? false : true))}
        className={`navTransparent ${styles.icons} ${styles.hamBurger}`}
      />
      <div
        className={`scroll_y_black_white ${styles.subContainer} ${
          showActive === true ? styles.show : styles.hide
        }`}
      >
        <div className={`${styles.subContainer2}`}>
          {navs.map((nav) => (
            <Link
              key={nav.id}
              className={`theme flex gap05rem align_center text_decoration_none ${
                path.startsWith(nav.link) && "blue"
              } white-black ${styles.links}`}
              href={nav.link}
              onClick={() =>
                setShowActive((prev) => (prev === true ? false : true))
              }
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
