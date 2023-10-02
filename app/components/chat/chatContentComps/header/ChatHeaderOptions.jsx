import React from "react";

const ChatHeaderOptions = () => {
  return (
    <div
      className="absolute background theme flex gap05rem column"
      style={{
        right: 0,
        top: "1.5rem",
        whiteSpace: "nowrap",
        padding: "0.5rem 1rem",
      }}
    >
      <p className="font12">Profile</p>
      <p className="font12">Block user</p>
      <p className="font12">Report user</p>
    </div>
  );
};

export default ChatHeaderOptions;
