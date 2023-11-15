import React from "react";
import AllBlogs from "@/app/components/blog/AllBlog";
import { authState } from "@/app/utils/session";
import Link from "next/link";
import { Button } from "antd";
import styles from "./styles.module.css";
const Blog = () => {
  return (
    <div>
      {!authState && (
        <div className="background2 width100 padding05rem flex justify_end">
          <Button style={{ height: "5dvh" }} className="textRight">
            <Link href={"/blog/post-blog"} className="text_color">
              New article
            </Link>
          </Button>
        </div>
      )}
      <div
        className={
          (styles.allBlogsContainer,
          !authState ? styles.allBlogsContainerAdd : styles.allBlogsContainerNo)
        }
      >
        <AllBlogs />
      </div>
    </div>
  );
};

export default Blog;
