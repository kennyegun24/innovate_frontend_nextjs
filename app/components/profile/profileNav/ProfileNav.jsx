import React from "react";
import Image from "next/image";
import styles from "./profileNav.module.css";
import { BsClockFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaSignOutAlt, FaUsers } from "react-icons/fa";
import { currentUserDetails } from "@/app/_mock/current_user_details";
import { numberFormat } from "@/app/utils/general";
import Link from "next/link";
const ProfileNav = () => {
  return (
    <div className={styles.container}>
      <section className="flex column gap1rem height100">
        <Image
          src={currentUserDetails.image}
          className="roundedImage object-cover"
          alt=""
          width={60}
          height={60}
        />
        <div className={styles.nameCareer}>
          <h3 className="font14">{currentUserDetails.name}</h3>
          <p className="font12">{currentUserDetails.profession}</p>
          <p className="font12">
            {numberFormat(currentUserDetails.followers_count)} followers
          </p>
        </div>
      </section>

      <section className={styles.profileNavigationsSection}>
        <Link
          href={"/current_user_profile"}
          className={`flex gap1rem text_color text_decoration_none ${styles.profileNavigationLink}`}
        >
          <BsClockFill /> Feeds
        </Link>
        <Link
          href={"/current_user_profile/about"}
          className={`flex gap1rem text_color text_decoration_none ${styles.profileNavigationLink}`}
        >
          <BiUser /> About
        </Link>
        <Link
          href={"/current_user_profile/friends"}
          className={`flex gap1rem text_color text_decoration_none ${styles.profileNavigationLink}`}
        >
          <FaUsers /> Friends
        </Link>
        {/* <p className={styles.profileNavigationLink}>Groups</p> */}
      </section>

      <section className={styles.profileNavigationsSection}>
        <p className={styles.profileNavigationLink}>
          <FaSignOutAlt /> Logout
        </p>
      </section>
    </div>
  );
};

export default ProfileNav;
