"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

const Back = () => {
  const path = usePathname();
  const pathName = path.split("/")[2] || "Settings";
  const name = pathName.charAt(0).toUpperCase() + pathName.substring(1);
  const history = useRouter();
  const handleBack = () => {
    history.back();
  };
  return (
    <div
      onClick={handleBack}
      className={`border flex align_center gap1rem back width100`}
    >
      <BiArrowBack className="font18" />
      <h3>{name}</h3>
    </div>
  );
};

export default Back;
