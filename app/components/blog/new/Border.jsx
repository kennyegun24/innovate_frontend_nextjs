import React from "react";

const Border = ({ style }) => {
  return (
    <div
      className={style}
      style={{
        height: "100%",
        width: "2px",
        borderLeft: "2px solid var(--white-black)",
        order: 1,
      }}
    />
  );
};

export default Border;
