import React from "react";
import LatestBlogs from "../LatestBlogs";
import { blogs } from "@/app/_mock/blogs";

const OtherBlogs = () => {
  return (
    <div style={{ width: "100%" }} className="width100">
      <LatestBlogs articles={blogs.slice(5, 8)} text="Other Blogs from user" />
    </div>
  );
};

export default OtherBlogs;
