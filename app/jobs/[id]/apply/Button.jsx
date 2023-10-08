import React, { useContext } from "react";
import { Button } from "antd";
import { FollowedContext } from "@/app/context/FollowedContext";

const ApplyButton = ({ step, disabled, setStep, text, backgroundColor }) => {
  const { setApply, setSuccess } = useContext(FollowedContext);
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
          ? [setApply(false), setSuccess(true)]
          : step >= 2 && text === "Previous" && setStep((prev) => prev - 1)
      }
      // className="blue_background"
    >
      {text}
    </Button>
  );
};

export default ApplyButton;
