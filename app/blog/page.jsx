import React from "react";
import AllBlogs from "@/app/components/blog/AllBlog";
import { authState } from "@/app/utils/session";
import Link from "next/link";
import { Button } from "antd";

const Blog = () => {
  return (
    <div>
      {authState && (
        <div className="background2 width100 padding05rem flex justify_end">
          <Button className="textRight">
            <Link href={"/blog/post-blog"} className="text_color">
              New article
            </Link>
          </Button>
        </div>
      )}
      <AllBlogs />
    </div>
  );
};

export default Blog;
