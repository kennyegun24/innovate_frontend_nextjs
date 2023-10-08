import { currentUserDetails } from "@/app/_mock/current_user_details";
import Image from "next/image";
import React from "react";

const ApplyUserDetails = () => {
  return (
    <div>
      <Image
        alt=""
        src={currentUserDetails.image}
        height={50}
        width={50}
        className="object-cover roundedImage"
      />
      <p className="font14">{currentUserDetails.name}</p>
      <p className="font12">{currentUserDetails.header}</p>
      <p className="font12">{currentUserDetails.profession}</p>
    </div>
  );
};

export default ApplyUserDetails;
