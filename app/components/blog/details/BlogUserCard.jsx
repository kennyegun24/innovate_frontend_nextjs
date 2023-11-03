import React from "react";
import styles from "./blog_card.module.css";
import { FaUser } from "react-icons/fa";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { BiConversation, BiMicrophone } from "react-icons/bi";
import { numberFormat, readTime, wordCount } from "@/app/utils/general";
import { blogPost } from "@/app/_mock/blog_post";
import image from "public/person1.jpg";
import Image from "next/image";

const BlogUserCard = ({ data }) => {
  return (
    <div className={`background2 gap05rem flex column ${styles.container}`}>
      <Image
        src={data.author_image}
        alt=""
        height={50}
        width={50}
        className="
        object-cover roundedImage
        "
      />
      <p className="font14">{data.author_name}</p>
      <p className="font12">Software Developer</p>
      <div className="flex gap05rem">
        <div className="flex gap05rem column">
          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <FaUser className="" />
            {data.author_name}
          </p>

          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <CalendarFilled className="" />
            {new Date(data.created_at).toDateString()}
          </p>

          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <CommentOutlined className="" />
            {numberFormat(data.comments_counter)} Comments
          </p>
        </div>
        <div className="flex gap05rem column">
          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <BiMicrophone className="" />
            {readTime(data.text)}
          </p>
          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <BiConversation className={`${styles.labels} `} />
            {wordCount(data.text)} words
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogUserCard;
