"use client";
import Image from "next/image";
import React, { useContext } from "react";
import LikeIcon from "@/app/components/interractions/LikeIcon";
import CommentIcon from "@/app/components/interractions/CommentIcon";
import styles from "./style.module.css";
import Comments from "./comments";
import WriteComment from "./WriteComment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUnauthUserPost } from "@/app/redux/unauth/postsReducer";
import { PostDetailsContext } from "@/app/context/PostDetailsContext";
import RollingAnimation from "@/app/components/animaate/RollingAnimation";
import { convertTime } from "@/app/utils/general";
const PostDetail = ({ params }) => {
  const { id } = params;

  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.singleUnauthPost);
  const { postData } = useContext(PostDetailsContext);

  useEffect(() => {
    if (postData === null) {
      dispatch(fetchUnauthUserPost({ id: id }));
    }
  }, [id, postData, dispatch]);

  const PostContent = postData || post;
  return (
    <div className={`background2 scroll_y_black_white ${styles.container}`}>
      {(!loading || Object.entries(PostContent).length > 0) && (
        <div className={`theme ${styles.subContainer}`}>
          <div
            className={`${styles.postCommentsContainer} flex gap1rem column`}
          >
            <div
              className={`flex column gap05rem theme text_color ${styles.subPostLeftContainer}`}
            >
              <div className={`flex gap1rem ${styles.postHeaderContainer}`}>
                <Image
                  className="roundedImage object-cover"
                  src={PostContent.creator_image}
                  alt=""
                  width={40}
                  height={40}
                />
                <div className="flex column gap02rem">
                  <p className="font14 fontW600">{PostContent.creator_name}</p>
                  <p className="font12">
                    {convertTime(PostContent.created_at)}
                  </p>
                </div>
              </div>
              <p
                className={`
               font12`}
              >
                {PostContent.text}
              </p>
              <div
                className={`flex align_center gap1rem ${styles.interractionsDiv}`}
              >
                <LikeIcon
                  isLiked={PostContent.isLiked}
                  count={PostContent.likes_count}
                />
                <CommentIcon count={PostContent.comments_count} />
              </div>
              {PostContent.image && (
                <div
                  className={`background2 theme padding1rem ${styles.postImageDiv}`}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={PostContent.image}
                    height={300}
                    width={300}
                    sizes="(max-width: '100%') calc(50.99vw - 32px), calc(90vw - 47px)"
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className={styles.inputWriteComment}>
              <WriteComment />
            </div>
            <div className={styles.commentsContainer}>
              <Comments />
            </div>
          </div>
        </div>
      )}
      {loading && !PostContent && <RollingAnimation />}
    </div>
  );
};

export default PostDetail;
