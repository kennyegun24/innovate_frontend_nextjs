import React from "react";

const ProfileButton = ({
  text,
  border = null,
  background = null,
  color = null,
}) => {
  return (
    <button
      className={`theme ${background ? background : "background2"} ${
        color ? color : "text_color"
      } ${border ? border : "border"} pointer`}
      style={{ borderRadius: "6px", padding: "0.5rem 1rem" }}
    >
      {text}
    </button>
  );
};

export default ProfileButton;
