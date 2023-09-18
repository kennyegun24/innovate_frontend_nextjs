"use client";
import { ThemeContext } from "@/app/context/DarkMode";
import React, { useContext } from "react";
import styles from "./PostFeedOverview.module.css";

const ProfileFeedsOverview = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <section
      className={`${styles.container} ${
        mode === "light" ? "light_background" : "dark_2_background"
      }`}
    >
      <div className={styles.listDiv}>
        <h4 className="font12">Studied at</h4>
        <p className="font12">Oxford University</p>
      </div>
      <hr />
      <div className={styles.listDiv}>
        <h4 className="font12">From</h4>
        <p className="font12">Delta state, Nigeria</p>
      </div>
      <hr />
      <div className={styles.listDiv}>
        <h4 className="font12">Lives in</h4>
        <p className="font12">Alimosho, Ipaja, Lagos state, Nigeria</p>
      </div>
    </section>
  );
};

export default ProfileFeedsOverview;
