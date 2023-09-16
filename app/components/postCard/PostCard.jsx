"use client";
import React, { useContext } from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/DarkMode";
import Like from "../interractions/Like";
import Comment from "../interractions/Comment";
import LikeIcon from "../interractions/LikeIcon";
import CommentIcon from "../interractions/CommentIcon";

const PostCard = ({ data }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="flex column gap2rem">
      {data.map((post) => (
        <div
          key={post.id}
          className={`theme ${
            mode === "light" ? "light_background" : "dark_2_background"
          } ${styles.container}`}
        >
          <div className={`flex column gap05rem ${styles.subContainer}`}>
            <div className={`flex gap1rem ${styles.postHeaderContainer}`}>
              <Image
                className="roundedImage object-cover"
                src={post.creator_image}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex column gap02rem">
                <p className="font14 fontW600">{post.creator_name}</p>
                <p className="font12">July 26 2018, 01:00pm</p>
              </div>
            </div>
            <p className={styles.postText}>{post.text}</p>
            {post.image && (
              <Image className={styles.postImage} src={post?.image} alt="" />
            )}
            <div
              className={`flex align_center gap1rem ${styles.interractionsDiv}`}
            >
              <LikeIcon count={post.likes_count} />
              <CommentIcon count={post.comments_count} />
            </div>
          </div>
          <div
            className={`flex justify_between align_center ${styles.likesCommentsDiv}`}
          >
            <div className="flex align_center gap1rem">
              <Like count={post.likes_count} />
              <Comment count={post.comments_count} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
