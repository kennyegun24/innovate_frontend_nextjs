"use client";
import ProfileFeedsOverview from "@/app/components/profile/profileFeeds/ProfileFeedsOverview";
import ProfileFeedsPosts from "@/app/components/profile/profileFeeds/ProfileFeedsPosts";
import React from "react";
import styles from "./profileFeeds.module.css";
import { usePathname } from "next/navigation";
import { otherUserDetails } from "@/app/_mock/user_details";

const CurrentUserProfilePostFeeds = () => {
  const pathId = usePathname().split("/")[2];
  return (
    <div className={styles.container}>
      <section className={styles.overViewContainer}>
        <ProfileFeedsOverview data={otherUserDetails[pathId]} />
      </section>
      <section className={styles.profilePostsComtainer}>
        <ProfileFeedsPosts data={otherUserDetails[pathId].posts} />
      </section>
    </div>
  );
};

export default CurrentUserProfilePostFeeds;
