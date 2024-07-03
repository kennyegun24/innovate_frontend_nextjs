"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Poppins } from "next/font/google";
import { useSession } from "next-auth/react";
import { newComment } from "@/app/utils/publicRequest";

const inter = Poppins({ subsets: ["latin"], weight: "500" });
const WriteComment = ({ post_id }) => {
  const railsEndpoint = "http://localhost:4000/api/v1";
  const session = useSession();
  const data = session.data;
  const [text, setText] = useState("");
  console.log(data?.user?.token);
  console.log(data?.user);
  const writeComment = async () => {
    newComment({
      token: data?.user?.token,
      post_id,
      text,
    });
  };

  return (
    <div
      className={`flex column gap1rem ${inter.className} ${styles.inputDiv}`}
    >
      <textarea
        type="text"
        name=""
        id=""
        className={`background text_color ${styles.input}`}
        placeholder="Write comment..."
        onChange={(e) => setText(e.target.value)}
      />

      <div className={styles.sendIconDiv}>
        <button onClick={writeComment} className={styles.sendIcon}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default WriteComment;
