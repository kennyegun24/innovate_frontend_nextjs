import React from "react";
import Search from "antd/es/input/Search";

const SearchComponent = ({ style }) => {
  return (
    <div className={style}>
      <p className="font14 padding05rem background">Search for blogs</p>

      <Search placeholder="input search text" enterButton />
    </div>
  );
};

export default SearchComponent;
