import ProfileFeedsOverview from "@/app/components/profile/profileFeeds/ProfileFeedsOverview";
import ProfileFeedsPosts from "@/app/components/profile/profileFeeds/ProfileFeedsPosts";
import React from "react";
import styles from "./profileFeeds.module.css";
import { currentUserDetails } from "../_mock/current_user_details";
import { posts } from "../_mock/posts_mock";

const CurrentUserProfilePostFeeds = () => {
  return (
    <div className={styles.container}>
      <section className={styles.overViewContainer}>
        <ProfileFeedsOverview data={currentUserDetails} />
      </section>
      <section className={styles.profilePostsComtainer}>
        <ProfileFeedsPosts data={posts} />
      </section>
    </div>
  );
};

export default CurrentUserProfilePostFeeds;
