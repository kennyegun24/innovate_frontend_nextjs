import Image from "next/image";
import React from "react";
import image from "public/innovate_previews.png";
import styles from "./topComp.module.css";
import SecondContainer from "./SecondContainer";
import Link from "next/link";

const TopComponent = () => {
  return (
    <div className={`${styles.container} flex column gap5rem`}>
      <div className={`${styles.container2} flex align_center justify_between`}>
        <div className={`flex column gap15rem ${styles.headerContainer}`}>
          <h1>
            Innovate Socials. <br />
            Made for the YOU, the people.
            <br /> Built with your best interest.
          </h1>
          <div className={styles.paragraph}>
            <p>Sharing your passions and talents with the world.</p>
            <p>
              Building authentic relationships with like-minded individuals.
            </p>
            <p>Staying up-to-date with the latest trends and innovations.</p>
          </div>

          <div className={`flex ${styles.btnDiv}`}>
            <Link className="text_decoration_none " href={"/login"}>
              <button className={`pointer ${styles.button1}`}>
                SIGNIN WITH EMAIL
              </button>
            </Link>
            <Link className="text_decoration_none " href={"/register"}>
              <button className={`pointer ${styles.button}`}>
                SIGNUP WITH EMAIL
              </button>
            </Link>
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
