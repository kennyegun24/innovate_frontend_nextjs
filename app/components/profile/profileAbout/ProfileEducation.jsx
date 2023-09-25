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
        350: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((school, index) => (
        <SwiperSlide key={index} className="">
          <div
            className="background2 flex column align_center gap05rem theme"
            style={{
              width: "100%",
              padding: "12.5px 12.5px",
              borderRadius: "6px",
              height: "max-content",
            }}
          >
            <Image
              className="object-cover"
              src={school.img}
              alt="School image"
              style={{
                borderRadius: "6px",
                width: "100%",
                height: "150px",
                minHeight: "150px",
              }}
            />
            <div
              className="flex gap05rem column"
              style={{ width: "100%", height: "120px" }}
            >
              <h4 className="font14">
                {school.school_name.length >= 15
                  ? school.school_name.slice(0, 15) + "..."
                  : school.school_name}
              </h4>
              <p className="font12">{school.degree}</p>
              <p className="font12">
                {school.desc.length >= 65
                  ? school.desc.slice(0, 65) + "..."
                  : school.desc}
              </p>
              <p className="font10">{school.year}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProfileEducation;
