"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageProvider";

const Back = () => {
  const { translateText } = useContext(LanguageContext);

  const _language = (param) => {
    return translateText("blog.search." + param);
  };
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
      <h3>{_language("srb") || "Searched Blogs"}</h3>
    </div>
  );
};

export default Back;
