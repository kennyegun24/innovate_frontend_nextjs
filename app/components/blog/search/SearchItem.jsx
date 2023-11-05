"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchItem = () => {
  const search = useSearchParams();
  const searchName = search.get("query");
  return <h2 style={{ fontSize: "30px" }}>Search results for {searchName}</h2>;
};

export default SearchItem;
