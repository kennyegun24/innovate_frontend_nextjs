import React from "react";
import NewPostForm from "../components/writePost/NewPost";
import styles from "./pages.module.css";
import RecommendedPages from "@/app/components/recommendedPages/RecommendedPages";
import Posts from "./Posts";
import FiveRecommendUser from "@/app/components/recommendedsers/fiveRecommendUser";
import { getServerSession } from "next-auth";

const Feeds = async () => {
  const session = await getServerSession();
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <RecommendedPages />
      </div>
      <div className={styles.middleContainer}>
        {session && <NewPostForm />}
        <div className={styles.subMiddleContainer}>
          <Posts />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <FiveRecommendUser />
      </div>
    </div>
  );
};

export default Feeds;
