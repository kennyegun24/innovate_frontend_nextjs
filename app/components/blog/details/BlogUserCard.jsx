"use client";
import React from "react";
import styles from "./blog_card.module.css";
import { FaRegComments, FaUser } from "react-icons/fa";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { BiConversation, BiMicrophone } from "react-icons/bi";
import { numberFormat, readTime, wordCount } from "@/app/utils/general";
import Image from "next/image";
import Link from "next/link";

const BlogUserCard = ({ data, click, lang }) => {
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
          <Link
            href={`/user/@${data.author_name}/${data.author_id}`}
            className={`${styles.labels} text_color flex gap05rem align_center`}
          >
            <FaUser className="" />
            {data.author_name}
          </Link>

          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <CalendarFilled className="" />
            {new Date(data.created_at).toDateString()}
          </p>

          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <CommentOutlined className="" />
            {numberFormat(data.comments_counter)} {lang("cmmt") || "Comments"}
          </p>
        </div>
        <div className="flex gap05rem column">
          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <BiMicrophone className="" />
            {readTime(data.text)}
          </p>
          <p className={`${styles.labels}  flex gap05rem align_center`}>
            <BiConversation className={`${styles.labels} `} />
            {wordCount(data.text)} {lang("details.wrds") || "Words"}
          </p>
        </div>
      </div>
      <button
        className={`
        ${styles.labels} blue width_fit gap05rem reverse_background pointer padding05rem flex gabutton05rem align_center
        `}
        onClick={click}
      >
        <FaRegComments className={`${styles.labels} `} />
        {lang("details.ctc") || "Click to comment"}
      </button>
    </div>
  );
};

export default BlogUserCard;
