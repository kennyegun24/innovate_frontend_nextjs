"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./profileFeeds.module.css";
import ProfileFeedsPosts from "@/app/components/profile/profileFeeds/ProfileFeedsPosts";
import useUserPostsHook from "./userPostHook";

const ProfilePosts = ({ id }) => {
  const [page, setPage] = useState(1);
  const { posts, hasMore, isLoading, error } = useUserPostsHook({ page, id });
  const [userPosts, setUserPosts] = useState(posts);

  useEffect(() => {
    setUserPosts(posts);
  }, [posts]);

  const handlePopularity = (e) => {
    const _sortedByPopularPosts = [...userPosts];
    if (e === "_lp-_mp") {
      _sortedByPopularPosts.sort(
        (a, b) =>
          a.likes_count + a.comments_count - (b.likes_count + b.comments_count)
      );
      setUserPosts(_sortedByPopularPosts);
    } else if (e === "_mp-_lp") {
      _sortedByPopularPosts.sort(
        (a, b) =>
          b.likes_count + b.comments_count - (a.likes_count + a.comments_count)
      );
      setUserPosts(_sortedByPopularPosts);
    } else if (e === "Popularity") {
      setUserPosts(posts);
    }
  };

  const handleRecent = (e) => {
    const _sortedTimePosts = [...userPosts];
    if (e === "_ld-_md") {
      _sortedTimePosts.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      setUserPosts(_sortedTimePosts);
    } else if (e === "_md-_ld") {
      _sortedTimePosts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setUserPosts(_sortedTimePosts);
    } else if (e === "Recent") {
      setUserPosts(otherUserDetails[params.id].posts);
    }
  };

  const observer = useRef(null);

  const lastPostRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("first");
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <section className={`gap1rem ${styles.profilePostsComtainer}`}>
      <div className=" background2 width100 flex justify_between padding1rem">
        <p>Posts</p>
        <div className="flex gap1rem align_center">
          <select
            className="background padding05rem pointer text_color"
            style={{ border: "none" }}
            onChange={(e) => handlePopularity(e.target.value)}
          >
            <option value="Popularity">Popularity</option>
            <option value="_lp-_mp">Less Popular</option>
            <option value="_mp-_lp">More Popular</option>
          </select>
          <select
            className="background padding05rem pointer text_color"
            style={{ border: "none" }}
            onChange={(e) => handleRecent(e.target.value)}
          >
            <option value="Recent">Recent</option>
            <option value="_ld-_md">Old</option>
            <option value="_md-_ld">New</option>
          </select>
        </div>
      </div>
      <ProfileFeedsPosts data={userPosts} reference={lastPostRef} />
    </section>
  );
};

export default ProfilePosts;
