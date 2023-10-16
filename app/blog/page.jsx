"use client";
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
          <Button style={{ height: "5vh" }} className="textRight">
            <Link href={"/blog/post-blog"} className="text_color">
              New article
            </Link>
          </Button>
        </div>
      )}
      <div
        style={{
          height: authState ? "calc(100vh - (5vh + 1rem))" : "100vh",
        }}
        className={styles.allBlogsContainer}
      >
        <AllBlogs />
      </div>
    </div>
  );
};

export default Blog;
