import React from "react";
import { currentUserDetails } from "@/app/_mock/current_user_details";
import Image from "next/image";

const data = [
  {
    label: "Name",
    text: currentUserDetails.name,
  },
  {
    label: "Username",
    text: currentUserDetails.user_name,
  },
  {
    label: "Phone number",
    text: currentUserDetails.phoneNumber,
  },
  {
    label: "Profession",
    text: currentUserDetails.profession,
  },
  {
    label: "Studied at",
    text: currentUserDetails.studiedAt,
  },
  {
    label: "Bio",
    text: currentUserDetails.bio,
  },
  {
    label: "Header",
    text: currentUserDetails.header,
  },
  {
    label: "About",
    text: currentUserDetails.about,
  },
];
const Information = () => {
  return (
    <div className="padding1rem ">
      <h3>Your personal information</h3>

      <div className="padding1rem flex column gap15rem">
        <section className="flex column gap1rem">
          <p className="font14 opacity07 padding05rem background2">
            Profile picture
          </p>
          <div className="paddingLeft2rem">
            <Image
              src={currentUserDetails.image}
              alt="Profile image"
              height={70}
              width={70}
              className="object-cover roundedImage"
            />
          </div>
        </section>

        <section className="flex column gap1rem">
          <p className="font14 opacity07 padding05rem background2">
            Personal Details
          </p>
          <div className="flex column gap1rem paddingLeft2rem">
            {data.map((values, index) => (
              <div key={index} className="flex gap1rem align_center">
                <h5>{values.label}:</h5>
                <p className="font14 background2 padding05rem">{values.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Information;
