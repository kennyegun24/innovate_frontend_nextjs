import React, { useContext } from "react";
import styles from "./applicationSuccess.module.css";
import { Button } from "antd";
import { BiCheckCircle } from "react-icons/bi";
import { FollowedContext } from "@/app/context/FollowedContext";

const ApplicationSuccess = () => {
  const { setSuccess } = useContext(FollowedContext);
  return (
    <div className={`flex align_center justify_center ${styles.container}`}>
      <div
        className={`reverse_text_color gap05rem flex column align_center justify_center padding05rem reverse_background2 ${styles.popContainer}`}
      >
        <h3 className="textCenter">Your Application has been submitted</h3>
        <BiCheckCircle className="font24 green" />
        <Button onClick={() => setSuccess(false)}>Go back to other jobs</Button>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
