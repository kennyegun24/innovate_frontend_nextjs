import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { numberFormat } from "@/app/utils/general";
import noImage from "public/no_blog_image.png";
const LatestBlogs = ({ text, articles }) => {
  const blogs = [...articles];
  return (
    <div className={`flex background2 column gap1rem ${styles.subContainer2}`}>
      <h3 className="padding05rem background font14">{text}</h3>
      {blogs
        .sort((a, b) => b.created_at - a.created_at)
        .map((blog) => (
          <div className={styles.blogCardDiv} key={blog.blogs_id}>
            <Image
              className={`object-cover ${styles.images2}`}
              src={blog?.image || noImage}
              width={300}
              height={200}
              alt=""
            />

            <Link
              href={`/blog/${blog.author_name}/${blog.id}`}
              className={`text_color theme flex column ${styles.subContainer2Sm}`}
            >
              <h3 className="font16">{blog.title}</h3>
              <div className="flex gap05rem align_center">
                <FaUser className="font10" />
                <p className="font10">{blog.author_name}</p>
                <CalendarFilled className="font10" />
                <p className="font10">
                  {new Date(blog.created_at).toDateString()}
                </p>
                <CommentOutlined className="font10" />
                <p className="font10">
                  {numberFormat(blog.comments_counter + blog.likes_counter)}{" "}
                  Comments
                </p>
              </div>
              <p className={`font14 ${styles.text}`}>
                {blog.text.slice(0, 80)}...
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default LatestBlogs;
