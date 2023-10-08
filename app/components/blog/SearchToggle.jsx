import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { FaSearch } from "react-icons/fa";

const SearchToggle = ({ setToggleSearch, toggleSearch, style }) => {
  return (
    <div
      onClick={() => setToggleSearch((prev) => (prev === true ? false : true))}
      className={`background_transparent padding05rem fontW600 font16 ${style}`}
    >
      {toggleSearch ? <CloseCircleOutlined /> : <FaSearch />}
    </div>
  );
};

export default SearchToggle;
