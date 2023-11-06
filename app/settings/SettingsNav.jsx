"use client";
import React, { useCallback, useState } from "react";
import { useContext } from "react";
import styles from "./settings.module.css";
import { BsChevronRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LanguageContext } from "@/app/context/LanguageProvider";

const SettingsNav = () => {
  const { translateText } = useContext(LanguageContext);
  const [searchText, setSearchText] = useState("");
  const path = usePathname();
  const handleText = useCallback((text) => {
    setSearchText(text);
  }, []);
  const _language = (param) => {
    return translateText("settings." + param);
  };
  const navs = [
    {
      name: _language("nav.acs") || "Account Settings",
      link: "/settings/account",
      otherLinks: [],
      otherNames: ["deactivate", "personal information", "password change"],
    },
    {
      name: _language("nav.pvs") || "Profile Settings",
      link: "/settings/profile",
      otherNames: ["Edit profile"],
    },
    {
      name: _language("nav.aps") || "Appearance",
      link: "/settings/appearance",
      otherNames: ["Dark mode", "Light mode", "langages"],
    },
    {
      name: _language("nav.pvc") || "Privacy",
      link: "/settings/privacy",
      otherNames: [],
    },
    {
      name: _language("nav.hlc") || "Help Center",
      link: "/settings/help",
      otherNames: ["Contact support"],
    },
    {
      name: _language("nav.tos") || "Terms of Service",
      link: "/settings/tos",
      otherNames: [],
    },
  ];
  return (
    <div className={`flex column gap2rem ${styles.container}`}>
      <h2 className="font16">{_language("header") || "Settings"}</h2>
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
              className={`flex theme justify_between align_center ${
                path.startsWith(each.link) && styles.activeLlink
              }
               ${
                 styles.navDivSm
               } linkBackgroundNone text_color text_decoration_none`}
            >
              <p className={styles.text}>{each.name}</p>
              <BsChevronRight />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SettingsNav;
