import React from "react";
import errorImg from "public/errorImg.png";
import Image from "next/image";

const Error = () => {
  return (
    <div className="flex justify_center column align_center width100 padding1rem">
      <Image
        className="object-cover not-found-profile-image"
        src={errorImg}
        alt="not found"
        style={{ filter: "grayscale(100%)" }}
      />
      <p className="font16">An error occured</p>
    </div>
  );
};

export default Error;
