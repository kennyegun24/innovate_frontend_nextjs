import Image from "next/image";
import React from "react";
import rooney from "public/rooney.jpg";
import styles from "./styles.module.css";
import ProfileButton from "../../ProfileButton";
import { numberFormat } from "@/app/helpers/general";
import Link from "next/link";
const ProfileHeader = ({ data }) => {
  return (
    <div className={styles.profileHeaderContainer}>
      <Image className={styles.profileHeaderImage} src={rooney} alt="" />

      <section className={styles.profileHeaderNavs}>
        <div className={styles.profileHeaderNavBtnDiv}>
          <Link href={"/current_user_profile"}>
            <ProfileButton text={"Feeds"} />
          </Link>
          <Link href={"/current_user_profile/about"}>
            <ProfileButton text={"About"} />
          </Link>
        </div>
        <div className={styles.profileHeaderProfileImageDiv}>
          <Image
            src={data.image}
            height={80}
            width={80}
            alt=""
            className="roundedImage object-cover"
          />
          <h3 className="font16">{data.name}</h3>
          <p className="font12">{data.profession}</p>
        </div>
        <div className={styles.profileHeaderNavBtnDiv}>
          <Link href={"/current_user_profile/friends"}>
            <ProfileButton text={"Friends"} />
          </Link>
          <Link href={"/current_user_profile"}>
            <ProfileButton text={"Edit Profile"} />
          </Link>
        </div>
      </section>

      <section className={styles.profileHeaderNavs2}>
        <h3>{numberFormat(data.followers_count)} Followers</h3>
        <h3>{numberFormat(data.post_count)} Posts</h3>
      </section>
    </div>
  );
};

export default ProfileHeader;
