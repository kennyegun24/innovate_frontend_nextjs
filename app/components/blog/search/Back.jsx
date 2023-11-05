"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Back = () => {
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
      <h3>Searched Blogs</h3>
    </div>
  );
};

export default Back;
