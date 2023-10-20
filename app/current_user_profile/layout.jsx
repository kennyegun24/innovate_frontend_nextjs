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
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <Back />
        </div>
      </div>
      <div className={styles.layoutProfileChildren}>
        <div className={styles.backDiv}>
          <Back />
        </div>
        <Header />
        <div className={styles.layoutProfileChildrenDiv}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
