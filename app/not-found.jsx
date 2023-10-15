import Image from "next/image";
import Link from "next/link";
import React from "react";
import ghost from "public/ghost1_white2.png";
import styles from "./notfound.module.css";

const NotFound = () => {
  return (
    <div
      className={`absolute flex align_center justify_center ${styles.container}`}
    >
      <div
        className={`flex align_center justify_between ${styles.containerSm}`}
        style={{}}
      >
        <div className="flex gap2rem column">
          <h1
            className={`${styles.not_found_page_header} ${styles.header}`}
            style={{}}
          >
            Hello Buddy,
          </h1>
          <p className="font12">
            We can&apos;t seem to find the page you are looking for...
          </p>
          <p className="font12">We suggest you check the URL for errors</p>
          <a
            href="/"
            className={`width_fit text_decoration_none ${styles.link}`}
          >
            Go Home
          </a>
        </div>
        <div className={`${styles.not_found_image_div} flex column`}>
          <div>
            <div className={`${styles.not_found_image_shadow1}`} />
            <Image src={ghost} alt="" className={`${styles.not_found_image}`} />
          </div>
          <div className={`${styles.not_found_image_shadow}`} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
