"use client";
import Image from "next/image";
import React, { useState } from "react";
import { posts } from "@/app/_mock/posts_mock";
import Link from "next/link";
import LikeIcon from "@/app/components/interractions/LikeIcon";
import CommentIcon from "@/app/components/interractions/CommentIcon";
import styles from "./style.module.css";
import Comments from "./comments";
import WriteComment from "./WriteComment";
import { usePathname } from "next/navigation";
const PostDetails = () => {
  const router = usePathname();
  const routePath = router.split("/");
  const postId = routePath[routePath.length - 1];
  const [post, setPost] = useState(posts[postId]);
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.postImageMainDiv}`}>
        <div className={`background2 theme padding1rem ${styles.postImageDiv}`}>
          {post.image && (
            <Image
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
              src={post.image}
              alt=""
            />
          )}
        </div>
      </div>

      <div className={`theme background2 ${styles.subContainer}`}>
        <div className={styles.postCommentsContainer}>
          <div
            className={`flex column gap05rem theme text_color ${styles.subPostLeftContainer}`}
          >
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
            <p
              className={`
               font12`}
            >
              {post.text}
            </p>
            <div
              className={`flex align_center gap1rem ${styles.interractionsDiv}`}
            >
              <LikeIcon isLiked={post.isLiked} count={post.likes_count} />
              <CommentIcon count={post.comments_count} />
            </div>
          </div>
          <Comments />
        </div>
        <div className={styles.inputWriteComment}>
          <WriteComment />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
