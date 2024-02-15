import React from "react";
import Image from "next/image";
import notFound from "public/no_content_profile.png";

const EmptyComponent = ({ text }) => {
  return (
    <div className="flex justify_center column align_center width100 padding1rem">
      <Image
        className="object-cover not-found-profile-image"
        src={notFound}
        alt="not found"
      />
      <p className="not-found-profile-text text_color">{text}</p>
    </div>
  );
};

export default EmptyComponent;
