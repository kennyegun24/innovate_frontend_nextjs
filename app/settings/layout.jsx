import React from "react";
import SettingsNav from "./SettingsNav";

const layout = ({ children }) => {
  return (
    <div className="flex width100">
      <div
        style={{ width: "35%", height: "100vh" }}
        className="scroll_y_black_white flex column"
      >
        <SettingsNav />
      </div>
      <div
        className="scroll_y_black_white flex column"
        style={{ width: "65%", height: "100vh" }}
      >
        {children}
      </div>
    </div>
  );
};

export default layout;
