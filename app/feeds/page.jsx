import React from "react";
import NewPostForm from "../components/writePost/NewPost";
import styles from "./pages.module.css";
import RecommendedPages from "../components/recommendedPages/RecommendedPages";
import RecommendedUsers from "../recommended_users/page";
const Feeds = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <RecommendedPages />
      </div>
      <div className={styles.middleContainer}>
        <NewPostForm />
      </div>
      <div className={styles.rightContainer}>
        <RecommendedUsers />
      </div>
    </div>
  );
};

export default Feeds;
