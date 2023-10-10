import Image from "next/image";
import React from "react";
import image from "public/innovate_previews.png";
import styles from "./topComp.module.css";
import { Button } from "antd";
import SecondContainer from "./SecondContainer";

const TopComponent = () => {
  return (
    <div className={`${styles.container} flex column gap5rem`}>
      <div
        style={{ padding: "1rem 5rem" }}
        className="flex align_center justify_between"
      >
        <div className={`flex column gap15rem ${styles.headerContainer}`}>
          <h1>
            Innovate Socials. <br />
            Made for the YOU, the people.
            <br /> Built with your best interest.
          </h1>
          <div className={styles.paragraph}>
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
            <Button type="dashed" className={`font14 ${styles.button}`} ghost>
              SIGNIN WITH EMAIL
            </Button>
            <Button className={`font14 ${styles.button}`}>
              SIGNUP WITH EMAIL
            </Button>
          </div>
        </div>

        <div className={styles.imageDiv}>
          <Image className={styles.image} src={image} alt="" />
        </div>
      </div>

      <SecondContainer />
    </div>
  );
};

export default TopComponent;
