"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProfileEducation = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      navigation
      breakpoints={{
        500: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((school, index) => (
        <SwiperSlide
          key={index}
          className="background2 flex column align_center gap05rem theme"
          style={{
            width: "33%",
            padding: "12.5px 12.5px",
            borderRadius: "6px",
          }}
        >
          <Image
            height={150}
            className="object-cover"
            src={school.img}
            alt="School image"
            style={{
              borderRadius: "6px",
              width: "100%",
            }}
          />
          <div className="flex gap05rem column" style={{ width: "100%" }}>
            <h4 className="font14">{school.school_name}</h4>
            <p className="font12">{school.degree}</p>
            <p className="font12">{school.desc}</p>
            <p className="font10">{school.year}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProfileEducation;
