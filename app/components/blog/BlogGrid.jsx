import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { blogs } from "@/app/_mock/blogs";
import { numberFormat } from "@/app/utils/general";
import { Button } from "antd";
const BlogGrid = () => {
  return (
    <div className={styles.subContainer}>
      {blogs
        .sort(
          (a, b) =>
            b.comments_count +
            b.likes_count -
            (a.comments_count + a.likes_count)
        )
        .slice(2, 5)
        .map((blog) => (
          <Link
            href={`/blog/${blog.blogs_id}`}
            className={`text_color theme relative ${styles.col}`}
            key={blog.blogs_id}
          >
            <Image
              className={`object-cover ${styles.image}`}
              src={blog.image}
              alt=""
            />
            <div
              className="absolute flex white column gap1rem align_start"
              style={{
                bottom: ".5rem",
                left: "0.5rem",
                right: "0.5rem",
              }}
            >
              <Button style={{ background: "#fc516d", color: "#fff" }}>
                Food Hobit
              </Button>
              <h5 className="font16">{blog.text.slice(0, 50)}...</h5>
              <div className="flex gap05rem align_center">
                <FaUser className="font10" />
                <p className="font10">{blog.author_name}</p>
                <CalendarFilled className="font10" />
                <p className="font10">03 April 2023</p>
                <CommentOutlined className="font10" />
                <p className="font10">
                  {numberFormat(blog.comments_count + blog.likes_count)}{" "}
                  Comments r
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default BlogGrid;
