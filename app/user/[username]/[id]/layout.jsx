import React from "react";
import Header from "./Header";
import styles from "./page.module.css";
import Back from "@/app/components/Back";

const fetchUserDetails = async (id) => {
  try {
    const fetchDetails = await fetch(
      `http://localhost:4000/api/v1/unauth/user_details/${id}`,
      {
        next: { revalidate: 3600 },
      }
    );
    const response = await fetchDetails.json();
    return response.data;
  } catch (error) {
    return {};
  }
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const data = await fetchUserDetails(id);
  return {
    title: `${data?.name} Profile`,
    description: `profession: ${data?.profession} | Name: ${data?.name} | Works at: ${data?.company}`,
    twitter: {
      title: `${data?.name} Profile`,
      description: `profession: ${data?.profession} | Name: ${data?.name} | Works at: ${data?.company}`,
      text: `I am ${data?.name}`,
    },
    openGraph: {
      title: `${data?.name} Profile`,
      description: `profession: ${data?.profession} | Name: ${data?.name} | Works at: ${data?.company}`,
      image: data?.image,
    },
  };
};
const Layout = async ({ children, params }) => {
  const { id } = params;
  return (
    <div className={styles.layoutContainer}>
      <section className={`scroll_y_black_white ${styles.miniContainer}`}>
        <div className={styles.backDiv}>
          <Back />
        </div>
        <div className={`flex column ${styles.layoutChildrenDiv}`}>
          <Header id={id} />
          <div className={styles.layoutProfileChildren}>{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
