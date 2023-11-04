import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { numberFormat, readTime, wordCount } from "@/app/utils/general";
import { BiConversation, BiMicrophone } from "react-icons/bi";
import { _anchorBoldItalics } from "@/app/utils/textFormat";
import noImage from "public/no_blog_image.png";
import styles from "./styles.module.css";

const BlogPost = ({ data }) => {
  return (
    <div className="background2 flex gap1rem column padding1rem">
      <Image
        src={data.image || noImage}
        alt=""
        className={`object-cover ${styles.image}`}
        height={300}
        width={400}
      />

      <div
        className="flex column gap2rem white-space"
        style={{ textAlign: "justify" }}
      >
        <div className="flex column gap1rem">
          <Button
            style={{
              background: "#fc516d",
              color: "#fff",
              width: "fit-content",
            }}
          >
            Food Hobit
          </Button>
          <h3 className="font16">{data.title}</h3>
          <div className="flex gap05rem wrap">
            <div className="flex gap05rem column">
              <p className={`${styles.labels}  flex gap05rem align_center`}>
                <FaUser className="" />
                {data.author_name}
              </p>

              <p className={`${styles.labels}  flex gap05rem align_center`}>
                <CalendarFilled className="" />
                {new Date(data.created_at).toDateString()}
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
            <p className={`${styles.labels}  flex gap05rem align_center`}>
              <CommentOutlined className="" />
              {numberFormat(data.comments_count)} Comments
            </p>
          </div>
        </div>
        <p
          className={`font14 ${styles.text}`}
          dangerouslySetInnerHTML={_anchorBoldItalics(data.text)}
        ></p>
      </div>
    </div>
  );
};

export default BlogPost;
