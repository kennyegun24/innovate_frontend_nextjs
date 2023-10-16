"use client";
import ProfileFeedsOverview from "@/app/components/profile/profileFeeds/ProfileFeedsOverview";
import ProfileFeedsPosts from "@/app/components/profile/profileFeeds/ProfileFeedsPosts";
import React from "react";
import styles from "./profileFeeds.module.css";
import { currentUserDetails } from "../_mock/current_user_details";
import { useState } from "react";

const CurrentUserProfilePostFeeds = () => {
  const [posts, setPosts] = useState(currentUserDetails.posts);
  const handlePopularity = (e) => {
    const _sortedByPopularPosts = [...posts];
    if (e.target.value === "_lp-_mp") {
      _sortedByPopularPosts.sort(
        (a, b) =>
          a.likes_count + a.comments_count - (b.likes_count + b.comments_count)
      );
      setPosts(_sortedByPopularPosts);
    } else if (e.target.value === "_mp-_lp") {
      _sortedByPopularPosts.sort(
        (a, b) =>
          b.likes_count + b.comments_count - (a.likes_count + a.comments_count)
      );
      setPosts(_sortedByPopularPosts);
    } else if (e.target.value === "Popularity") {
      setPosts(otherUserDetails[params.id].posts);
    }
  };

  const handleRecent = (e) => {
    const _sortedTimePosts = [...posts];
    if (e.target.value === "_ld-_md") {
      _sortedTimePosts.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      setPosts(_sortedTimePosts);
    } else if (e.target.value === "_md-_ld") {
      _sortedTimePosts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setPosts(_sortedTimePosts);
    } else if (e.target.value === "Recent") {
      setPosts(otherUserDetails[params.id].posts);
    }
  };
  return (
    <div className={styles.container}>
      <section className={styles.overViewContainer}>
        <ProfileFeedsOverview data={currentUserDetails} />
      </section>
      <section className={styles.profilePostsComtainer}>
        <div className=" background2 width100 flex justify_between padding1rem">
          <p>Posts</p>
          <div className="flex gap1rem align_center">
            <select
              className="background padding05rem pointer text_color"
              style={{ border: "none" }}
              onChange={handlePopularity}
            >
              <option value="Popularity">Popularity</option>
              <option value="_lp-_mp">Less Popular</option>
              <option value="_mp-_lp">More Popular</option>
            </select>
            <select
              className="background padding05rem pointer text_color"
              style={{ border: "none" }}
              onChange={handleRecent}
            >
              <option value="Recent">Recent</option>
              <option value="_ld-_md">Old</option>
              <option value="_md-_ld">New</option>
            </select>
          </div>
        </div>
        <ProfileFeedsPosts data={posts} />
      </section>
    </div>
  );
};

export default CurrentUserProfilePostFeeds;
