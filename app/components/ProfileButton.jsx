import React from "react";

const ProfileButton = ({
  text,
  border = null,
  background = null,
  color = null,
  font_size = null,
  padding = null,
}) => {
  return (
    <button
      className={`theme ${background ? background : "background2"} ${
        color ? color : "text_color"
      } ${border ? border : "border"}  pointer`}
      style={{
        borderRadius: "6px",
        padding: padding ? padding : "0.5rem 1rem",
        fontSize: font_size ? font_size : "14px",
      }}
    >
      {text}
    </button>
  );
};

export default ProfileButton;
