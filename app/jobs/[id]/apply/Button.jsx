import React from "react";
import { Button } from "antd";

const ApplyButton = ({ step, disabled, setStep, text, backgroundColor }) => {
  return (
    <Button
      disabled={disabled}
      style={{
        backgroundColor: backgroundColor,
        color: "#fff",
      }}
      onClick={() =>
        step === 1
          ? setStep((prev) => prev + 1)
          : step === 2 && text === "Apply"
          ? setStep((prev) => prev + 1)
          : step >= 2 && text === "Previous" && setStep((prev) => prev - 1)
      }
      // className="blue_background"
    >
      {text}
    </Button>
  );
};

export default ApplyButton;
