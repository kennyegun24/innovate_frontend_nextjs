"use client";
import React, { useContext } from "react";
import NavBar from "../components/landingPage/NavBar";
import { HeightContext } from "../context/HeightContext";
import styles from "./about.module.css";
import SecondComp from "./SecondComp";
import Footer from "../components/landingPage/Footer";

const About = () => {
  const { scrollY, setElement } = useContext(HeightContext);
  if (typeof window !== "undefined") {
    setElement("aboutPage");
  }
  return (
    <div
      className={`${styles.container} aboutPage scroll_y_black_white flex column  align_center`}
    >
      <div className={`${styles.container2} flex column `}>
        <NavBar scrollY={scrollY} />
        <div className={`${styles.first} flex column align_center`}>
          <div className="flex gap1rem column align_center">
            <h1 className="textCenter">
              Welcome to Innovate Socials, a vibrant social space where
              connections flourish and innovation thrives.
            </h1>
            <h4 className="textCenter">
              Join our diverse community, discover like-minded individuals, and
              share your passions. With exciting features and a commitment to
              inclusivity, Innovate Socials empowers you to connect, engage, and
              shape your own social journey
            </h4>
          </div>
        </div>

        <SecondComp />
      </div>
      <Footer />
    </div>
  );
};

export default About;
