"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageProvider";
const SearchItem = ({ styles }) => {
  const { translateText } = useContext(LanguageContext);

  const _language = (param) => {
    return translateText("blog.search." + param);
  };
  const search = useSearchParams();
  const searchName = search.get("query");
  return (
    <h2 className={styles.search_text}>
      {_language("srhrs") || "Search results for"}{" "}
      <span className="blue">{searchName}</span>
    </h2>
  );
};

export default React.memo(SearchItem);
