import React from "react";
import PostCard from "@/app/components/postCard/PostCard";
import { posts } from "@/app/_mock/posts_mock";

const Posts = () => {
  return <PostCard data={posts} />;
};

export default Posts;
