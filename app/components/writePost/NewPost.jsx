"use client";
import Image from "next/image";
import React, { useContext, useRef, useState, useEffect } from "react";
import styles from "./newPost.module.css";
import { BsCamera } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
import { ThemeContext } from "@/app/context/DarkMode";

const NewPostForm = () => {
  const [postActive, setPostActive] = useState(false);
  const textareaRef = useRef(null);
  const area = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (area.current && !area.current.contains(event.target)) {
        setPostActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex column gap1rem theme ${styles.container} background2 border_bottom`}
      ref={area}
    >
      <div className={`flex gap1rem width100 border_bottom theme`}>
        <Image
          className={styles.image}
          src="/rooney.jpg"
          width={50}
          height={50}
          alt="profile image"
        />
        <form className="width100">
          <textarea
            className={`padding05rem flex column gap1rem width100 resize_off ${styles.textarea} text_color`}
            rows="8"
            placeholder="Write something..."
            ref={textareaRef}
            onClick={() => setPostActive(true)}
          />
        </form>
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <label
        htmlFor="image"
        className={`width_fit theme padding05rem flex align_center gap05rem font12 ${styles.button} border`}
      >
        <BiCamera /> Media
      </label>

      {selectedImage && (
        <>
          <h5>Selected Image</h5>
          <div className={styles.selectedImageSubContainer}>
            <Image
              src={selectedImage && URL.createObjectURL(selectedImage)}
              height={75}
              width={75}
              alt="selected image"
              className={styles.selectedImage}
            />
            <span
              onClick={() => setSelectedImage(null)}
              className={styles.selectedImageClose}
            >
              X
            </span>
          </div>
        </>
      )}

      {postActive && (
        <>
          <button
            className={`width100 padding05rem flex align_center justify_center gap05rem margintop1rem ${styles.button2} border text_color`}
          >
            Publish Post
          </button>
        </>
      )}
    </div>
  );
};

export default NewPostForm;
