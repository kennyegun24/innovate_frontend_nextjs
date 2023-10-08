import ProfileFeedsOverview from "@/app/components/profile/profileFeeds/ProfileFeedsOverview";
import ProfileFeedsPosts from "@/app/components/profile/profileFeeds/ProfileFeedsPosts";
import React from "react";
import styles from "./profileFeeds.module.css";
import { otherUserDetails } from "@/app/_mock/user_details";

export const generateMetadata = ({ params }) => {
  return {
    title: otherUserDetails[params.id].name + " Profile",
    description: otherUserDetails[params.id].bio,
  };
};

const CurrentUserProfilePostFeeds = ({ params }) => {
  return (
    <div className={styles.container}>
      <section className={styles.overViewContainer}>
        <ProfileFeedsOverview data={otherUserDetails[params.id]} />
      </section>
      <section className={styles.profilePostsComtainer}>
        <ProfileFeedsPosts data={otherUserDetails[params.id].posts} />
      </section>
    </div>
  );
};

export default CurrentUserProfilePostFeeds;
