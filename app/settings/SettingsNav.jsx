"use client";
import React, { useCallback, useState } from "react";
import styles from "./settings.module.css";
import { BsChevronRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";
const navs = [
  {
    name: "Account Settings",
    link: "/settings/account",
    otherLinks: [],
    otherNames: ["deactivate", "personal information", "password change"],
  },
  {
    name: "Profile Settings",
    link: "/settings/profile",
    otherNames: ["Edit profile"],
  },
  {
    name: "Appearance",
    link: "/settings/appearance",
    otherNames: ["Dark mode", "Light mode", "langages"],
  },
  {
    name: "Privacy",
    link: "/settings/privacy",
    otherNames: [],
  },
  {
    name: "Help Center",
    link: "/settings/help",
    otherNames: ["Contact support"],
  },
  {
    name: "Terms of Service",
    link: "/settings/tos",
    otherNames: [],
  },
];
const SettingsNav = () => {
  const [searchText, setSearchText] = useState("");
  const path = usePathname();
  const handleText = useCallback((text) => {
    setSearchText(text);
  }, []);
  return (
    <div className={`flex column gap2rem ${styles.container}`}>
      <input
        className={styles.searchBox}
        type="search"
        placeholder="Search settings..."
        onChange={(e) => handleText(e.target.value)}
      />
      <div className="linkBackgroundNone">
        {navs
          .filter(
            (search) =>
              search.name.toLowerCase().includes(searchText?.toLowerCase()) ||
              (search.otherNames || []).some((names) =>
                names.toLowerCase().includes(searchText.toLowerCase())
              )
          )
          .map((each, index) => (
            <Link
              href={each.link}
              key={index}
              className={`flex justify_between align_center ${
                path.startsWith(each.link) && styles.activeLlink
              }
               ${
                 styles.navDivSm
               } linkBackgroundNone text_color text_decoration_none`}
            >
              <p className="font14">{each.name}</p>
              <BsChevronRight />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SettingsNav;
