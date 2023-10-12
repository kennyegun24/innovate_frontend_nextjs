"use client";
import { Button } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { blogs } from "@/app/_mock/blogs";
import { numberFormat } from "@/app/utils/general";
import SearchComponent from "./Search";
import SearchToggle from "./SearchToggle";
import Link from "next/link";

const AllBlogs = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div className={`scroll_y ${styles.container}`}>
      <SearchToggle
        setToggleSearch={setToggleSearch}
        toggleSearch={toggleSearch}
        style={styles.searchIconDiv}
      />
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

      <div className={`${styles.bottomContainer} `}>
        <div
          className={`flex background2 column gap1rem ${styles.subContainer2}`}
        >
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
        <div
          className={`${toggleSearch ? styles.show : styles.hide} ${
            styles.searchContainer
          }`}
        >
          <SearchComponent style={`background2 ${styles.searchDiv}`} />
          <div
            className={`flex background2 column gap1rem ${styles.subContainer3}`}
          >
            <h3 className="padding05rem background font14">Most Liked Blogs</h3>
            {blogs
              .sort(
                (a, b) =>
                  b.comments_count +
                  b.likes_count -
                  (a.comments_count + a.likes_count)
              )
              .slice(0, 2)
              .map((blog) => (
                <div className={styles.blogCardDiv2} key={blog.blogs_id}>
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
                    <div
                      className={`flex gap05rem align_center ${styles.wrap}`}
                    >
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
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
