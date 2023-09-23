import React from "react";
import styles from "./style.module.css";
import { Poppins } from "next/font/google";
import { FaPaperPlane } from "react-icons/fa";

const inter = Poppins({ subsets: ["latin"], weight: "500" });
const WriteComment = () => {
  return (
    <div className={`${inter.className} ${styles.inputDiv}`}>
      <textarea
        type="text"
        name=""
        id=""
        className={styles.input}
        placeholder="Write comment..."
      />

      <div className={styles.sendIconDiv}>
        <FaPaperPlane className={styles.sendIcon} />
      </div>
    </div>
  );
};

export default WriteComment;
