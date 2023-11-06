"use client";
import React from "react";
import Search from "antd/es/input/Search";
import { useRouter } from "next/navigation";

const SearchComponent = ({ style, text }) => {
  const router = useRouter();
  return (
    <div className={style}>
      <p className="font14 padding05rem background">{text}</p>

      <Search
        placeholder="input search text"
        enterButton
        onSearch={(e) => {
          router.push(`/blog/search?query=${e}`);
        }}
      />
    </div>
  );
};

export default SearchComponent;
