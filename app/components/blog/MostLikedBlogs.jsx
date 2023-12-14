import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
// import { blogs } from "@/app/_mock/blogs";
import { numberFormat } from "@/app/utils/general";
import noImage from "public/no_blog_image.png";

const MostLikedBlogs = ({ articles, text, comment }) => {
  const blogs = [...articles];
  return (
    <div className={`flex background2 column gap1rem ${styles.subContainer3}`}>
      <h3 className="padding05rem background font14">{text}</h3>
      {blogs
        .sort(
          (a, b) =>
            b.comments_counter +
            b.likes_counter -
            (a.comments_counter + a.likes_counter)
        )
        .slice(0, 2)
        .map((blog) => (
          <div className={styles.blogCardDiv2} key={blog.id}>
            <Image
              src={blog.image || noImage}
              alt=""
              className={`object-cover ${styles.images2}`}
              width={300}
              height={200}
            />

            <Link
              href={`/blog/${blog.author_name}/${blog.id}`}
              className={`text_color theme flex column ${styles.subContainer2Sm}`}
            >
              <h3 className="font14">{blog.title}</h3>
              <div className={`flex gap05rem align_center ${styles.wrap}`}>
                <FaUser className="font10" />
                <p className="font10">{blog.author_name?.slice(0, 8)}...</p>
                <CalendarFilled className="font10" />
                <p className="font10">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
                <CommentOutlined className="font10" />
                <p className="font10">
                  {numberFormat(blog.comments_counter + blog.likes_counter)}{" "}
                  {comment}
                </p>
              </div>
              <p className={`font12 ${styles.text}`}>
                {blog.text.slice(0, 80)}...
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MostLikedBlogs;
