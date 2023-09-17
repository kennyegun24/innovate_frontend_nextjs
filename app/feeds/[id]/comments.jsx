import Image from "next/image";
import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import { FaPaperPlane, FaPlane, FaPlaneDeparture } from "react-icons/fa";
import image from "public/rooney.jpg";
import styles from "./style.module.css";
import { comments } from "@/app/_mock/comments";

const Comments = () => {
  return (
    <div className={` ${styles.commentDiv}`}>
      {comments.map((comment, index) => (
        <div className="flex gap1rem " key={index}>
          <div>
            <Image
              className={`${styles.commentImage}`}
              src={comment.commentor_image}
              alt=""
            />
          </div>

          <div
            className={`flex gap05rem column light_background padding05rem br6`}
          >
            <h3 className="font12">Ken</h3>
            <p className="font12">{comment.text}</p>
            <p className="font10">2days</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
