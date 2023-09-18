import Image from "next/image";
import React from "react";
import rooney from "public/rooney.jpg";
import styles from "./styles.module.css";
import ProfileButton from "../../ProfileButton";
import { numberFormat } from "@/app/helpers/general";
import { currentUserDetails } from "@/app/_mock/current_user_details";
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
            src={currentUserDetails.image}
            height={80}
            width={80}
            alt=""
            className="roundedImage object-cover"
          />
          <h3 className="font16">{currentUserDetails.name}</h3>
          <p className="font12">{currentUserDetails.profession}</p>
        </div>
        <div className={styles.profileHeaderNavBtnDiv}>
          <ProfileButton text={"Friends"} />
          <ProfileButton text={"Photos"} />
        </div>
      </section>

      <section className={styles.profileHeaderNavs2}>
        <h3>{numberFormat(currentUserDetails.followers_count)} followers</h3>
        <ProfileButton text={"Edit Profile"} />
      </section>
    </div>
  );
};

export default ProfileHeader;
