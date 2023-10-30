import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { HiOutlineLink } from "react-icons/hi";
const EditProfileSettings = () => {
  return (
    <div className={styles.container}>
      <h3>Edit your personal information</h3>
      <div className={`flex column gap15rem ${styles.subContainer}`}>
        <Link
          href={"/current_user_profile/edit/profile"}
          className="text_docoration_none blue font14 flex align_center gap05rem"
        >
          Click here to edit your profile
          <HiOutlineLink />
        </Link>
      </div>
    </div>
  );
};

export default EditProfileSettings;
