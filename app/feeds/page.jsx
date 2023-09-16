import React from "react";
import NewPostForm from "../components/writePost/NewPost";
import styles from "./pages.module.css";
import RecommendedPages from "@/app/components/recommendedPages/RecommendedPages";
import RecommendedUsers from "@/app/recommended_users/page";
import Posts from "./Posts";
const Feeds = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <RecommendedPages />
      </div>
      <div className={styles.middleContainer}>
        <NewPostForm />
        <div className={styles.subMiddleContainer}>
          <Posts />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <RecommendedUsers />
      </div>
    </div>
  );
};

export default Feeds;
