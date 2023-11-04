"use client";
import styles from "./styles.module.css";
import BlogUserCard from "./BlogUserCard";
import BlogPost from "./BlogPost";
import OtherBlogs from "./OtherBlogs";
import useSWR from "swr";
import BlogComment from "./comment/BlogComment";
import { useState } from "react";

const BlogDetails = ({ id }) => {
  const [show, setShow] = useState(false);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/v1/blogs/${id}`,
    fetcher,
    {
      refreshInterval: null,
      errorRetryInterval: 5000,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryCount: 1,
    }
  );
  const res = data?.data;
  if (isLoading) return;

  const handleShow = () => {
    setShow((prev) => (prev === true ? false : true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <BlogUserCard click={handleShow} data={res} />
      </div>
      <div className={`${styles.blogCard} flex gap2rem column`}>
        <BlogPost data={res} />
        <div className="width100">
          <OtherBlogs id={res.blogs_id} />
        </div>
      </div>
      {show && <BlogComment click={handleShow} />}
    </div>
  );
};

export default BlogDetails;
