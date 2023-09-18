import Image from "next/image";
import React from "react";
import rooney from "public/rooney.jpg";
import styles from "./styles.module.css";
const ProfileHeader = ({ mode }) => {
  return (
    <div className={styles.profileHeaderContainer}>
      <Image className={styles.profileHeaderImage} src={rooney} alt="" />

      <section className={styles.profileHeaderNavs}>
        <div className={styles.profileHeaderNavBtnDiv}>
          <button
            className={`theme ${
              mode === "light"
                ? "light_background dark_text light_border "
                : "dark_border dark_2_background light_text"
            } ${styles.button}`}
          >
            Feeds
          </button>
          <button
            className={`theme ${
              mode === "light"
                ? "light_background dark_text light_border"
                : "dark_border dark_2_background light_text"
            } ${styles.button}`}
          >
            About
          </button>
        </div>
        <div className={styles.profileHeaderProfileImageDiv}>
          <Image
            src={rooney}
            height={80}
            width={80}
            alt=""
            className="roundedImage object-cover"
          />
          <h3 className="font16">Kenny Elias</h3>
          <p className="font12">Software Developer</p>
        </div>
        <div className={styles.profileHeaderNavBtnDiv}>
          <button
            className={`theme ${
              mode === "light"
                ? "light_background dark_text light_border"
                : "dark_border dark_2_background light_text"
            } ${styles.button}`}
          >
            Friends
          </button>
          <button
            className={`theme ${
              mode === "light"
                ? "light_background dark_text light_border"
                : "dark_border dark_2_background light_text"
            } ${styles.button}`}
          >
            Photos
          </button>
        </div>
      </section>

      <section className={styles.profileHeaderNavs2}>
        <h3>3.4K followers</h3>
        <button
          className={`theme ${
            mode === "light"
              ? "light_background dark_text light_border"
              : "dark_border dark_2_background light_text"
          } ${styles.button}`}
        >
          Edit Profile
        </button>
      </section>
    </div>
  );
};

export default ProfileHeader;
