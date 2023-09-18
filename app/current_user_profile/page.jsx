import ProfileFeedsOverview from "@/app/components/profile/profileFeeds/ProfileFeedsOverview";
import ProfileFeedsPosts from "@/app/components/profile/profileFeeds/ProfileFeedsPosts";
import React from "react";
import styles from "./profileFeeds.module.css";

const ProfilePostFeeds = () => {
  return (
    <div className={styles.container}>
      <section className={styles.overViewContainer}>
        <ProfileFeedsOverview />
      </section>
      <section className={styles.profilePostsComtainer}>
        <ProfileFeedsPosts />
      </section>
    </div>
  );
};

export default ProfilePostFeeds;
