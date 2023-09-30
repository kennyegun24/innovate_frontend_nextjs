"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ghost from "public/ghost1_white.png";
// import ghost from "public/ghost1_black.png";

const notFound = () => {
  return (
    <div
      className="absolute"
      style={{
        width: "100%",
        top: "0",
        background: "#111",
        left: 0,
        height: "100%",
        zIndex: 999999,
      }}
    >
      <div className="flex align_center justify_center">
        <div className="flex gap2rem column">
          <h1 className="not_found_page_header" style={{ fontSize: "60px" }}>
            Hello Buddy,
          </h1>
          <p className="font12">
            We can&apos;t seem to find the page you are looking for...
          </p>
          <p className="font12">We suggest you check the URL for errors</p>
          <Link
            href={"/"}
            style={{
              background: "#fff",
              padding: "0.5rem",
              color: "#111",
              borderRadius: "6px",
            }}
            className="width_fit text_decoration_none"
          >
            Go Home
          </Link>
        </div>
        <div className="not_found_image_div">
          <Image src={ghost} alt="" className="not_found_image" />
          <div className="not_found_image_shadow" />
        </div>
      </div>
    </div>
  );
};

export default notFound;
