import React from "react";
import PostCard from "../../postCard/PostCard";
// import { posts } from "@/app/_mock/posts_mock";

const ProfileFeedsPosts = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      <PostCard data={data} />
    </div>
  );
};

export default ProfileFeedsPosts;
