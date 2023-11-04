"use client";
import { comments } from "@/app/_mock/comments";
import React, { useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import styles from "./clog_comment.module.css";

const BlogComment = ({ click }) => {
  const area = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        area.current &&
        event.target.firstChild.className ===
          "clog_comment_main_section__OoOw9 scroll_y_black_white column flex gap2rem"
      ) {
        click();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [click]);
  return (
    <section className={`${styles.commentSection}`} ref={area}>
      <div
        className={`${styles.main_section} scroll_y_black_white column flex gap2rem`}
      >
        <section className={`${styles.write_comment} gap1rem flex column`}>
          <TfiClose onClick={click} className="font18 white-black pointer" />
          <div className={`${styles.write_comment_div} flex column gap05rem`}>
            <section
              className={`${styles.image_name} flex align_center gap05rem`}
            >
              <p className={styles.image}></p>
              <p className="font14">Kenny Egun</p>
            </section>
            <textarea
              placeholder="Share your thoughts..."
              className="background_invisible text_color"
              name=""
              id=""
            ></textarea>
            <div className="flex align_center justify_end gap05rem">
              <button className={`${styles.button} text_color pointer`}>
                Cancel
              </button>
              <button
                className={`${styles.button_respond} white-black pointer`}
              >
                Respond
              </button>
            </div>
          </div>
        </section>
        <section className={`${styles.comments}`}>
          <div className={`${styles.commentDiv} flex column gap15rem`}>
            {comments.map((comment, _index) => (
              <section key={_index} className={`flex column gap05rem`}>
                <div className={`flex align_center gap1rem`}>
                  <p className={styles.image}></p>
                  <div className={`flex column gap02rem`}>
                    <p className="font12">{comment.commentor_name}</p>
                    <p className="font12">04 Nov 2023</p>
                  </div>
                </div>
                <p className={`font12 ${styles.comment_text}`}>
                  {comment.text}
                </p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogComment;
