"use client";
import React, { useContext, useEffect } from "react";
import { HeightContext } from "../context/HeightContext";
import NavBar from "../components/landingPage/NavBar";
import styles from "./page.module.css";
import Image from "next/image";
import kennyImage from "public/kenny_Resize.png";
import Footer from "../components/landingPage/Footer";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

const AboutCreator = () => {
  const { scrollY, setElement } = useContext(HeightContext);

  useEffect(() => {
    setElement("about_creator");
  }, []);
  return (
    <div className="about_creator flex column align_center scroll_y_black_white">
      <NavBar scrollY={scrollY} />
      <div className={styles.containerSm}>
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Your Social Media Web App! We are Innovate Socials, the
            creators behind this platform. We&apos;re excited to share our story
            with you.
          </p>
        </section>

        <section>
          <h2>Mission and Vision</h2>
          <p>
            Our mission is to create a single social media platform that can
            serve all purposes and be used by everyone! We want to bring people
            together, foster connections, and provide a safe and inclusive space
            for users to share their ideas, passions, and experiences.
          </p>
        </section>

        <section>
          <h2>Founding Story</h2>
          <p>
            This app is a portfolio project I am creating to boost my skills and
            use it as a real-world complex application example when going for
            interviews. It&apos;s a labor of love and a testament to my
            dedication to improving and showcasing my abilities. I believe that
            if this application meets 70% of my goals, it has the potential to
            be launched fully for everyone to enjoy.
          </p>
        </section>

        <section className="flex align_center width100">
          <h2>Meet the Team</h2>
          <div className={styles.sectionDiv}>
            <div>
              <p>
                Our dedicated team works tirelessly to make this platform a
                reality. Here are some of the key members:
              </p>
              <p className={`fontW600 ${styles.no_space}`}>
                Kenny Elias - Software Engineer
              </p>
              <p>
                I am a Nigerian junior software developer who is based in Lagos,
                Nigeria. This project is built as a portfolio project and is not
                meant to be taken as anything other than that. Although, it
                might be taken seriously if it meets 70% of my vision!
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image src={kennyImage} className={styles.image} alt="" />
            </div>
          </div>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions, suggestions, or just want to say hello,
            feel free to reach out to us at{" "}
          </p>
          <div className="flex gap05rem">
            <a className="black font20" href="mailto:kennyegun240@gmail.com">
              <MailFilled />
            </a>
            <a className="black font20" href="https://github.com/kennyegun24">
              <GithubFilled />
            </a>
            <a
              className="black font20"
              href="https://www.linkedin.com/in/kenny-egun-kennyegun24/"
            >
              <LinkedinFilled />
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutCreator;
