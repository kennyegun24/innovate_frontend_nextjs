// "use client";
import Image from "next/image";
import React from "react";
import rooney from "public/rooney.jpg";
import styles from "./styles.module.css";
import ProfileButton from "../../ProfileButton";
import { numberFormat } from "@/app/utils/general";
import Link from "next/link";

const ProfileHeader = ({
  data,
  feeds,
  about,
  editProfile,
  friends,
  button = null,
}) => {
  return (
    <div className={styles.profileHeaderContainer}>
      <Image className={styles.profileHeaderImage} src={rooney} alt="" />

      <section className={styles.profileHeaderNavs}>
        <div className={styles.profileHeaderNavBtnDiv}>
          <Link href={feeds}>
            <ProfileButton text={"Feeds"} />
          </Link>
          <Link href={about}>
            <ProfileButton text={"About"} />
          </Link>
        </div>
        <div className={styles.profileHeaderProfileImageDiv}>
          <Image
            src={data.image}
            width={60}
            height={60}
            alt=""
            className={`roundedImage object-cover ${styles.profileImage}`}
          />
          <div className={`${styles.profileName} flex column gap05rem`}>
            <h3 className={`font16 ${styles.truncate}`}>{data.name}</h3>
            <p className="font12">{data.profession}</p>
          </div>
        </div>
        <div className={styles.profileHeaderNavBtnDiv}>
          <Link href={friends}>
            <ProfileButton text={"Friends"} />
          </Link>
          <Link href={editProfile}>
            <ProfileButton text={"Edit Profile"} />
          </Link>
        </div>
      </section>

      <section className={styles.profileHeaderNavs2}>
        <h3 className={styles.follow_count}>
          {numberFormat(data.followers_count)} Followers
        </h3>
        <div className="flex gap15rem align_center">
          {button && (
            <ProfileButton
              border={button.border}
              background={button.background_color}
              text={"Follow"}
              color={button.color}
            />
          )}
          <h3 className={styles.follow_count}>
            {numberFormat(data.post_count)} Posts
          </h3>
        </div>
      </section>
    </div>
  );
};

export default ProfileHeader;
