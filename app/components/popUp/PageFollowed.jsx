import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PageFollowed = ({ action }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        width: "240px",
      }}
      className={`padding1rem flex gap1rem background2`}
    >
      <FaCheckCircle className="font20" />
      <p className="font12 fontW600"> {action}</p>
    </div>
  );
};

export default PageFollowed;
