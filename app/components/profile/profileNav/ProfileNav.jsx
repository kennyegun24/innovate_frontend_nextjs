import React from "react";
import rooney from "public/rooney.jpg";
import Image from "next/image";
import styles from "./profileNav.module.css";
import { BsClockFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaSignOutAlt, FaUsers } from "react-icons/fa";
const ProfileNav = () => {
  return (
    <div className={styles.container}>
      <section className="flex column gap1rem height100">
        <Image
          src={rooney}
          className="roundedImage object-cover"
          alt=""
          width={60}
          height={60}
        />
        <div className={styles.nameCareer}>
          <h3 className="font14">Kenny Egun</h3>
          <p className="font12">Software dev</p>
        </div>
      </section>

      <section className={styles.profileNavigationsSection}>
        <p className={styles.profileNavigationLink}>
          <BsClockFill /> Feeds
        </p>
        <p className={styles.profileNavigationLink}>
          <BiUser /> About
        </p>
        <p className={styles.profileNavigationLink}>
          <FaUsers /> Friends
        </p>
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
