import React from "react";
import styles from "./second.module.css";
import images from "public/asset1.jpg";
import images4 from "public/content_creator.jpg";
import images2 from "public/job_seeker.jpg";
import images3 from "public/blogger.jpg";
import images5 from "public/social.jpg";
import Image from "next/image";

const data = [
  {
    image: images3,
    header: "Are you a blogger?",
    paragraph:
      "Innovate Socials integrates a powerful blogging platform, empowering you to create and share your thoughts with the world. With limitless possibilities, you can express your creativity and engage your audience like never before. Join us in shaping the future of social innovation.",
  },
  {
    image: images4,
    header: "Are you a content creator?",
    paragraph:
      "Innovate Socials is your canvas for creativity. Express yourself through rich multimedia content, from stunning visuals to captivating videos and articles. Our platform is designed to amplify your voice and connect you with a global audience. Join us in redefining content creation.",
  },
  {
    image: images2,
    header: "Are you a job seeker?",
    paragraph:
      "Innovate Socials offers a dedicated job application section, connecting you with exciting career opportunities. Companies post available roles, and you can easily apply directly through our platform. Start your job search journey with us and take the next step in your career.",
  },
  {
    image: images5,
    header: "Want to balance your social and professional life?",
    paragraph:
      "Innovate Socials understands the importance of work-life balance. Our platform is designed to help you seamlessly manage your social and professional life. Connect with like-minded individuals, explore job opportunities, and enjoy a well-rounded lifestyle. Join us in achieving harmony in your personal and career journey.",
  },
  {
    image: images,
    header:
      "Want to connect with friends, family and people in the professoinal fields?",
    paragraph:
      " Innovate Socials is your bridge to a diverse network of connections. Whether it&apos;s reuniting with friends and family or forging new relationships in your professional journey, our platform makes it easy. Join us to experience the power of connections that enrich your personal and career life.",
  },
];
const SecondComp = () => {
  return (
    <div className={`flex column gap5rem ${styles.container}`}>
      <div className={styles.headerDiv}>
        <h2>Discover, Connect, Share - Together, We Are Innovate!</h2>
        <h4>
          Unlock the Power of Innovate Socials - Where Connections Become
          Innovation.
        </h4>
      </div>

      <div className="flex column">
        {data.map((data, index) => (
          <div key={index} className={styles.mappedDiv}>
            <div className={styles.mappedElement}>
              <h3>{data.header}</h3>
              <p>{data.paragraph}</p>
            </div>
            <div className={styles.imageDiv}>
              <Image src={data.image} alt="" className={styles.mappedImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondComp;
