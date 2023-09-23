"use client";
import Image from "next/image";
import React from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ProfileExperience = ({ data }) => {
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
      {data.map((work, index) => (
        <SwiperSlide key={index} className="">
          <div
            className="background2 flex column align_center gap05rem theme"
            style={{
              width: "100%",
              padding: "12.5px 12.5px",
              borderRadius: "6px",
              height: "250px",
            }}
          >
            <Image
              // height={150}
              className="object-cover"
              src={work.image}
              alt="work image"
              style={{
                borderRadius: "6px",
                height: "60%",
                width: "100%",
              }}
            />
            <div
              className="flex gap05rem column"
              style={{ width: "100%", height: "40%" }}
            >
              <h4 className="font14">{work.company_name}</h4>
              <p className="font12">{work.title}</p>
              <p className="font12">
                {work.desc.length >= 100 ? work.desc.slice(0, 100) : work.desc}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProfileExperience;
