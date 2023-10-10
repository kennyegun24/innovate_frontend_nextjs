import React from "react";
import image2 from "public/image_preview2a.png";
import image3 from "public/image_preview7a.png";
import image4 from "public/image_preview4a.png";
import styles from "./secondConp.module.css";
import Image from "next/image";
import { Button } from "antd";
import Carousel from "./Carousel";

const data = [
  {
    header:
      "More than just a Social Media. \n Integrated Blog inclusive for all! \n Create content for people to learn from you.",
    p1: "Sharing your passions and talents with the world.",
    p2: "Building authentic relationships with like-minded individuals.",
    p3: "Staying up-to-date with the latest trends and innovations.",
    image: image2,
    btn: {
      btn1: {
        text: "SIGNIN WITH EMAIL",
        type: "default",
      },
      btn2: {
        text: "SIGNUP WITH EMAIL",
        type: "default",
      },
    },
  },
  {
    header:
      "Share without limits \nMake post updates to let your friends know what you are up to!\n",
    p1: "Innovate Socials - Limitless sharing, timeless connections.",
    p2: "Connect with like-minded individuals and build authentic relationships.",
    p3: "Stay ahead with the latest trends and innovations in your community.",
    image: image3,
    btn: {
      btn1: {
        text: "Have an account? Login : Signup",
        type: "link",
        styles: {
          color: "#5596e6",
          decoration: "underline",
          fontWeight: 800,
        },
      },
    },
  },
  {
    header:
      "Looking for jobs? \nLook no further! Innovate Socials got you covered!!\n",
    p1: "Innovate Socials - Limitless sharing, timeless connections.",
    p2: "Connect with your industry working people.",
    p3: "Stay ahead and get notified of new jobs.",
    image: image4,
    btn: {
      btn1: {
        text: "Have an account? Login : Signup",
        type: "link",
        styles: {
          color: "#5596e6",
          decoration: "underline",
          fontWeight: 800,
        },
      },
    },
  },
];
const SecondContainer = () => {
  return (
    <div
      style={{ padding: "5rem 0" }}
      className="flex reverse_background3 gap5rem column"
    >
      {data.map((each, index) => (
        <div
          key={index}
          className={`flex margintop15vh align_center justify_between reverse_text_color ${styles.row_type}`}
        >
          <div className={styles.imageDiv2}>
            <Image src={each.image} className={styles.image2} alt="" />
          </div>
          <div className={`flex column gap15rem ${styles.headerContainer2}`}>
            <h2>{each.header}</h2>
            <div className={`${styles.paragraph2}`}>
              <p>{each.p1}</p>
              <p>{each.p2}</p>
              <p>{each.p3}</p>
            </div>

            {each.btn && (
              <div className="flex gap1rem">
                {each.btn.btn1 && (
                  <Button
                    type={each.btn.btn1.type}
                    className={`font14 ${styles.button2}`}
                    style={{
                      color: "#000",
                      ...{ ...(each.btn.btn1.styles && each.btn.btn1.styles) },
                    }}
                    ghost={!each.btn.btn1.type}
                  >
                    {each.btn.btn1.text}
                  </Button>
                )}
                {each.btn.btn2 && (
                  <Button
                    type={each.btn.btn2.type}
                    style={{ background: "#000", color: "#fff" }}
                    className={`font14 ${styles.button2}`}
                  >
                    {each.btn.btn2.text}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="flex column align_center gap3rem width100">
        <h4>Companies that trust Us</h4>
        <Carousel />
      </div>
    </div>
  );
};

export default SecondContainer;
