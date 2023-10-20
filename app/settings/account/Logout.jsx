"use client";

import React from "react";
import { BiLogOut } from "react-icons/bi";
import styles from "./styles.module.css";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div
      onClick={() => signOut()}
      className={`linkBackgroundNone text_decoration_none text_color`}
    >
      <div className={`flex gap15rem align_center ${styles.mappedSettings}`}>
        <BiLogOut className={`${styles.icon}`} />
        <div className={styles.width85}>
          <p className={`fontW600 ${styles.linkName}`}>Logout</p>
          <p className={`opacity07 ${styles.linkText}`}>
            Logout from your current session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
