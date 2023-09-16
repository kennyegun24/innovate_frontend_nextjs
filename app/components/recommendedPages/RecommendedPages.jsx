"use client";
import React, { useContext } from "react";
import { FaUserPlus } from "react-icons/fa";
import Image from "next/image";
import { ThemeContext } from "@/app/context/DarkMode";
import { companies } from "@/app/_mock/companies";

const RecommendedPages = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={`sticky top15Vh marginTop1rem flex column gap1rem theme br6px padding1rem ${
        mode === "light" ? "light_background" : "dark_2_background"
      }`}
    >
      <h3 className="font16">Suggested Pages</h3>

      {companies.map((user) => (
        <>
          <hr />
          <div className={`flex justify_between align_center`}>
            <div className="flex align_center gap1rem">
              <Image
                height={50}
                width={50}
                alt=""
                src={user.image}
                className="object-cover roundedImage"
              />
              <div>
                <p className="font14 fontW600">{user.company_name}</p>
                <p className="font10">{user.field}</p>
              </div>
            </div>
            <FaUserPlus className="font18" />
          </div>
        </>
      ))}
    </div>
  );
};

export default RecommendedPages;
