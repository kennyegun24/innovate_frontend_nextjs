import React from "react";
import ProfileNav from "@/app/components/profile/profileNav/ProfileNav";
import Header from "./Header";
import styles from "./page.module.css";
import Back from "../components/Back";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className={styles.layoutContainer}>
      <div className={`theme background2 ${styles.layoutProfileNavDiv}`}>
        <ProfileNav />
      </div>
      <div className={styles.layoutProfileChildren}>
        <div className={styles.backDiv}>
          <Back />
        </div>
        <div className={` ${styles.layoutChildrenDiv} flex column gap2rem`}>
          <Header />
          <div className={styles.layoutProfileChildrenDiv}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
