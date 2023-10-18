"use client";
import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Like from "../interractions/Like";
import Comment from "../interractions/Comment";
import LikeIcon from "../interractions/LikeIcon";
import CommentIcon from "../interractions/CommentIcon";
import Link from "next/link";

const currentUser = {
  id: 1,
};

const PostCard = ({ data }) => {
  return (
    <div className="flex column gap2rem">
      {data.map((post, index) => (
        <div key={index} className={`theme background2 ${styles.container}`}>
          <div className={`flex column gap05rem ${styles.subContainer}`}>
            <Link
              href={
                currentUser.id === post.author_id
                  ? "current_user_profile"
                  : `/user/${post.author_id}`
              }
              className={`flex gap1rem text_color text_decoration_none ${styles.postHeaderContainer}`}
            >
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
            </Link>
            <Link
              href={`/feeds/${post.id}`}
              className={`text_color text_decoration_none ${styles.postText}`}
            >
              {post.text}
            </Link>
            {post.image && (
              <Image
                height={300}
                width={300}
                className={styles.postImage}
                src={post?.image}
                alt=""
              />
            )}
            <div
              className={`flex align_center gap1rem ${styles.interractionsDiv}`}
            >
              <LikeIcon isLiked={post.isLiked} count={post.likes_count} />
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
