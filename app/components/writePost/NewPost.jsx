"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./newPost.module.css";
import { BiCamera } from "react-icons/bi";
import { useHideRef } from "@/app/customHooks/refHook";
import { useSession } from "next-auth/react";
const NewPostForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { showActive, setShowActive, area } = useHideRef();
  const { data } = useSession();
  return (
    <div
      className={`flex column gap1rem theme ${styles.container} background2 border_bottom`}
      ref={area}
    >
      <div className={`flex gap1rem width100 border_bottom theme`}>
        <div>
          <Image
            className={styles.image}
            src={data?.user.image}
            width={50}
            height={50}
            alt="profile image"
          />
        </div>
        <form className="width100">
          <textarea
            className={`padding05rem flex column gap1rem width100 resize_off ${styles.textarea} text_color`}
            rows="8"
            placeholder="Write something..."
            onClick={() => setShowActive(true)}
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

      {showActive && (
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
