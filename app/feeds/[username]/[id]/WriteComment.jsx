import React from "react";
import styles from "./style.module.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "500" });
const WriteComment = () => {
  return (
    <div
      className={`flex column gap1rem ${inter.className} ${styles.inputDiv}`}
    >
      <textarea
        type="text"
        name=""
        id=""
        className={`background ${styles.input}`}
        placeholder="Write comment..."
      />

      <div className={styles.sendIconDiv}>
        <button className={styles.sendIcon}>Comment</button>
      </div>
    </div>
  );
};

export default WriteComment;
