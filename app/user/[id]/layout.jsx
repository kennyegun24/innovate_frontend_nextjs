import React from "react";
import Header from "./Header";
import styles from "./page.module.css";
import { otherUserDetails } from "@/app/_mock/user_details";
import Back from "@/app/components/Back";

export const generateMetadata = ({ params }) => {
  const data = otherUserDetails[params.id];
  return {
    title: `${data.name} Profile`,
    description: `profession: ${data.profession} | Name: ${data.name} | Works at: ${data.company}`,
    twitter: {
      title: `${data.name} Profile`,
      description: `profession: ${data.profession} | Name: ${data.name} | Works at: ${data.company}`,
      text: `I am ${data.name}`,
    },
    openGraph: {
      title: `${data.name} Profile`,
      description: `profession: ${data.profession} | Name: ${data.name} | Works at: ${data.company}`,
      image: data.image,
    },
  };
};
const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <section className={`scroll_y_black_white ${styles.miniContainer}`}>
        <div className={styles.backDiv}>
          <Back />
        </div>
        <div className={`flex column ${styles.layoutChildrenDiv}`}>
          <Header />
          <div className={styles.layoutProfileChildren}>{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
