"use client";
import styles from "./styles.module.css";
import BlogUserCard from "./BlogUserCard";
import BlogPost from "./BlogPost";
import OtherBlogs from "./OtherBlogs";
import useSWR from "swr";
import BlogComment from "./comment/BlogComment";
import { useState, useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageProvider";
import RollingAnimation from "../../animaate/RollingAnimation";

const BlogDetails = ({ id }) => {
  const { translateText } = useContext(LanguageContext);
  const [show, setShow] = useState(false);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://192.168.14.193:4000/api/v1/blogs/${id}`,
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
  if (isLoading) return <RollingAnimation />;

  if (error) return "Something went wrong";

  const handleShow = () => {
    setShow((prev) => (prev === true ? false : true));
  };

  const _language = (param) => {
    return translateText("blog." + param);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <BlogUserCard lang={_language} click={handleShow} data={res} />
      </div>
      <div className={`${styles.blogCard} flex gap2rem column`}>
        <BlogPost lang={_language} data={res} />
        <div className="width100">
          <OtherBlogs lang={_language} id={res?.blogs_id} />
        </div>
      </div>
      {show && <BlogComment click={handleShow} />}
    </div>
  );
};

export default BlogDetails;
