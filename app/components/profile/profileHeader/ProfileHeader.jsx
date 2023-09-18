import Image from "next/image";
import React from "react";
import rooney from "public/rooney.jpg";
import styles from "./styles.module.css";
import ProfileButton from "../../ProfileButton";
const ProfileHeader = ({ mode }) => {
  return (
    <div className={styles.profileHeaderContainer}>
      <Image className={styles.profileHeaderImage} src={rooney} alt="" />

      <section className={styles.profileHeaderNavs}>
        <div className={styles.profileHeaderNavBtnDiv}>
          <ProfileButton text={"Feeds"} />
          <ProfileButton text={"About"} />
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
          <ProfileButton text={"Friends"} />
          <ProfileButton text={"Photos"} />
        </div>
      </section>

      <section className={styles.profileHeaderNavs2}>
        <h3>3.4K followers</h3>
        <ProfileButton text={"Edit Profile"} />
      </section>
    </div>
  );
};

export default ProfileHeader;
