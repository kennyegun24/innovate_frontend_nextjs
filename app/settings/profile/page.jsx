"use client";
import React from "react";
import { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { HiOutlineLink } from "react-icons/hi";
import { LanguageContext } from "@/app/context/LanguageProvider";
const EditProfileSettings = () => {
  const { translateText } = useContext(LanguageContext);
  const _language = (param) => {
    return translateText("settings.profile." + param);
  };
  return (
    <div className={styles.container}>
      <h3>{_language("header") || "Edit your personal information"}</h3>
      <div className={`flex column gap15rem ${styles.subContainer}`}>
        <Link
          href={"/current_user_profile/edit/profile"}
          className="text_docoration_none blue font14 flex align_center gap05rem"
        >
          {_language("link_text") || "Click here to edit your profile"}
          <HiOutlineLink />
        </Link>
      </div>
    </div>
  );
};

export default EditProfileSettings;
