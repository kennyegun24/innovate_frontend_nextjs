import React from "react";
import styles from "./footer.module.css";
import image from "public/innovateIcon.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={`flex column align_center ${styles.container}`}>
      <div className={styles.design} />
      <div className={`flex gap2rem align_center ${styles.footerDiv}`}>
        <Link href="/" className="white">
          <Image src={image} alt="" height={50} width={50} />
        </Link>
        <p className="white font14">Login</p>
        <p className="white font14">Register</p>
        <Link href="/about" className="white">
          <p className="white font14">About Us</p>
        </Link>
        <p className="white font14">Creator</p>
        <p className="white font14">Why Innovate Socials?</p>
        <p className="font12 white">&copy; 2023</p>
      </div>
    </div>
  );
};

export default Footer;
