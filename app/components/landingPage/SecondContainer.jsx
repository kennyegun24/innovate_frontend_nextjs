import React from "react";
import image2 from "public/image_preview2.png";
import styles from "./secondConp.module.css";
import Image from "next/image";
import { Button } from "antd";
import Carousel from "./Carousel";

const SecondContainer = () => {
  return (
    <div
      style={{ padding: "5rem 0" }}
      className="flex reverse_background3 gap5rem column"
    >
      <div className="flex column align_center gap3rem width100">
        <h4>Companies that trust Us</h4>
        <Carousel />
      </div>
      <div className="flex align_center justify_between reverse_text_color">
        <div className={styles.imageDiv2}>
          <Image src={image2} className={styles.image2} alt="" />
        </div>
        <div
          className={`flex column gap15rem  paddingRight5rem ${styles.headerContainer2}`}
          style={{
            alignItems: "flex-end",
          }}
        >
          <h2>
            More than just a Social Media. <br />
            Integrated Blog inclusive for all!
            <br /> Create content for people to learn from you.
          </h2>
          <div className={`${styles.paragraph2}`}>
            <p className="font14">
              Sharing your passions and talents with the world.
            </p>
            <p className="font14">
              Building authentic relationships with like-minded individuals.
            </p>
            <p className="font14">
              Staying up-to-date with the latest trends and innovations.
            </p>
          </div>

          <div className="flex gap1rem">
            <Button
              type="primary"
              className={`font14 ${styles.button2}`}
              style={{ color: "#000" }}
              ghost
            >
              SIGNIN WITH EMAIL
            </Button>
            <Button
              style={{ background: "#000", color: "#fff" }}
              className={`font14 ${styles.button2}`}
            >
              SIGNUP WITH EMAIL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
