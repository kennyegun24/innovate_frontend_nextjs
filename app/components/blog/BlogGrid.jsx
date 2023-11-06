import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { numberFormat } from "@/app/utils/general";
import { Button } from "antd";
import noImage from "public/no_blog_image.png";
const BlogGrid = ({ articles, comment }) => {
  const blogs = [...articles];
  return (
    <div className={styles.subContainer}>
      {blogs
        .sort(
          (a, b) =>
            b.comments_counter +
            b.likes_counter -
            (a.comments_counter + a.likes_counter)
        )
        .slice(2, 5)
        .map((blog) => (
          <Link
            href={`/blog/${blog.author_name}/${blog.id}`}
            className={`text_color theme relative ${styles.col}`}
            key={blog.blogs_id}
          >
            <Image
              className={`object-cover ${styles.image}`}
              src={blog?.image || noImage}
              width={300}
              height={200}
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
              <Button
                style={{
                  background: "#fc516d",
                  color: "#fff",
                  padding: "0.2rem",
                }}
              >
                Food Hobit
              </Button>
              <h5 className="font16">{blog.title.slice(0, 50)}...</h5>
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
                  {comment}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default BlogGrid;
