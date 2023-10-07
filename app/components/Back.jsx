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
    <div onClick={handleBack} className={`border back`}>
      <BiArrowBack className="font16" />
    </div>
  );
};

export default Back;
