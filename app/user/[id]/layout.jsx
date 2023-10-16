import React from "react";
import ProfileNav from "@/app/components/profile/profileNav/ProfileNav";
import Header from "./Header";
import styles from "./page.module.css";
import Back from "@/app/components/Back";
import { users } from "@/app/_mock/users";

export const generateMetadata = ({ params }) => {
  const data = users[params.id];
  return {
    title: `${data.name} profile`,
    description: `profession: ${data.profession} ~ Name: ${data.name}`,
    twitter: {
      title: `${data.name} profile`,
      description: `profession: ${data.profession} ~ Name: ${data.name}`,
      text: `I am ${data.name}`,
    },
    openGraph: {
      title: `${data.name} profile`,
      description: `profession: ${data.profession} | Name: ${data.name}`,
      image: data.image,
    },
  };
};
const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />

      <div className={styles.layoutProfileChildren}>{children}</div>
    </div>
  );
};

export default Layout;
