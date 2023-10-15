import React from "react";
import Image from "next/image";
import styles from "./carousel.module.css";
import { companies } from "@/app/_mock/companies";

const Carousel = () => {
  return (
    <div className={` ${styles.carouselContainer}`}>
      <div className={` ${styles.carousel}`}>
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.image}
            alt=""
            className={` ${styles.image}`}
          />
        ))}
      </div>
      <div className={` ${styles.carousel}`}>
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.image}
            alt=""
            className={` ${styles.image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
