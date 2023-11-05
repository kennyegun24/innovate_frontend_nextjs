"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchItem = ({ styles }) => {
  const search = useSearchParams();
  const searchName = search.get("query");
  return (
    <h2 className={styles.search_text}>
      Search results for <span className="blue">{searchName}</span>
    </h2>
  );
};

export default React.memo(SearchItem);
