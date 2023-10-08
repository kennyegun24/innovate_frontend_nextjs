import { posts } from "@/app/_mock/posts_mock";
import React from "react";

export const generateMetadata = ({ params }) => {
  const data = posts[params.id];
  return {
    title: "Post by " + data.creator_name,
    description:
      data.comments_count + "Comments" + data.likes_count + "Likes" + data.text,
  };
};
const layout = ({ children, params }) => {
  return <>{children}</>;
};

export default layout;
