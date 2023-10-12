import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { blogs } from "@/app/_mock/blogs";
import { numberFormat } from "@/app/utils/general";
import { Button } from "antd";
const LatestBlogs = () => {
  return (
    <div className={`flex background2 column gap1rem ${styles.subContainer2}`}>
      <h3 className="padding05rem background font14">Latest</h3>
      {blogs
        .sort(
          (a, b) =>
            b.comments_count +
            b.likes_count -
            (a.comments_count + a.likes_count)
        )
        .slice(5, 10)
        .map((blog) => (
          <div className={styles.blogCardDiv} key={blog.blogs_id}>
            <Image
              src={blog.image}
              alt=""
              className={`object-cover ${styles.images2}`}
            />

            <Link
              href={`/blog/${blog.blogs_id}`}
              className={`text_color theme flex column ${styles.subContainer2Sm}`}
            >
              <h3 className="font16">{blog.title}</h3>
              <div className="flex gap05rem align_center">
                <FaUser className="font10" />
                <p className="font10">{blog.author_name}</p>
                <CalendarFilled className="font10" />
                <p className="font10">03 April 2023</p>
                <CommentOutlined className="font10" />
                <p className="font10">
                  {numberFormat(blog.comments_count + blog.likes_count)}{" "}
                  Comments
                </p>
              </div>
              <p className={`font14 ${styles.text}`}>{blog.text}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default LatestBlogs;
