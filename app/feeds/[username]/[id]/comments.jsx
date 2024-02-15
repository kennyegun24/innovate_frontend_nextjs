"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import styles from "./style.module.css";
import usePostCommentsHook from "@/app/customHooks/usePostComments";
import ConnectivityProblem from "@/app/components/no-content/Connectivity";
import RollingAnimation from "@/app/components/animaate/RollingAnimation";
import { usePathname } from "next/navigation";
import EmptyComponent from "@/app/components/profile/error/EmptyComponent";
import { convertTime } from "@/app/utils/general";
import Link from "next/link";

const Comments = () => {
  const [page, setPage] = useState(1);
  const path = usePathname();
  const splitPath = path.split("/");
  const id = splitPath[splitPath.length - 1];
  const { comments, hasMore, isLoading, error } = usePostCommentsHook(page, id);
  const lastPostRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );
  if (isLoading && comments.length === 0) return <RollingAnimation />;
  if (comments.length === 0 && !isLoading)
    return (
      <EmptyComponent
        text={"There are no comments yet! Be the first to write one"}
      />
    );
  if (error) return <ConnectivityProblem text={"Something went wrong"} />;

  return (
    <div className={`theme text_color ${styles.commentDiv}`}>
      <h3 className="text_color">Comments</h3>
      {comments.map((comment, index) => (
        <div
          className="flex gap1rem margintop1rem"
          key={index}
          ref={comment.length === index + 1 ? lastPostRef : null}
        >
          <Link href={`/user/${comment.commentor_name}/${comment.user_id}`}>
            <Image
              className={`${styles.commentImage} text_decoration_none`}
              src={comment.commentor_image}
              alt=""
              height={50}
              width={50}
            />
          </Link>

          <div
            className={`flex gap05rem column light_background padding05rem br6`}
          >
            <Link
              href={`/user/${comment.commentor_name}/${comment.user_id}`}
              className="font12 text_color text_decoration_none"
            >
              {comment.commentor_name}
            </Link>
            <p className="font12">{comment.text}</p>
            <p className="font10">{convertTime(comment.created_at)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
