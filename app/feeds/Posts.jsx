"use client";
import React, { useCallback, useRef } from "react";
import PostCard from "@/app/components/postCard/PostCard";
import usePostsHook from "../customHooks/usePosts";
import { useState } from "react";
import RollingAnimation from "../components/animaate/RollingAnimation";
import ConnectivityProblem from "../components/no-content/Connectivity";

const Posts = () => {
  const [page, setPage] = useState(1);
  const { error, hasMore, isLoading, posts } = usePostsHook(page);
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
  if (isLoading && posts.length === 0) return <RollingAnimation />;
  if (error) return <ConnectivityProblem text={"Something went wrong"} />;
  return <PostCard data={posts} reference={lastPostRef} />;
};

export default Posts;
