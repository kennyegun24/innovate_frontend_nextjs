import Image from "next/image";
import Link from "next/link";
import React from "react";
import ghost from "public/ghost1_white2.png";

const NotFound = () => {
  return (
    <div
      className="flex align_center justify_center"
      style={{
        width: "100%",
        top: "0",
        background: "#000",
        // left: 0,
        height: "100%",
        // zIndex: 999999,
      }}
    >
      <div
        className="flex align_center justify_between"
        style={{
          width: "70%",
          height: "100%",
        }}
      >
        <div className="flex gap2rem column">
          <h1 className="not_found_page_header" style={{ fontSize: "30px" }}>
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
        <div className="not_found_image_div gap5rem flex column">
          <div>
            <div className="not_found_image_shadow1" />
            <Image src={ghost} alt="" className="not_found_image" />
          </div>
          <div className="not_found_image_shadow" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
