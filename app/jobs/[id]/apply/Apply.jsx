import React, { useState } from "react";
import styles from "./apply.module.css";
import { Button } from "antd";
import Step1 from "./Step1";
import ApplyButton from "./Button";
import ApplyUserDetails from "./ApplyUserDetails";
import Step2 from "./Step2";

const Apply = () => {
  const [step, setStep] = useState(1);

  const filterStyles = {
    height: "100%",
    width: step <= 2 ? `${(step / 2) * 100}%` : `100%`,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.formContainer}  reverse_background2 reverse_text_color `}
      >
        <div className={styles.progressContainer}>
          <div className={styles.progressContainer2}>
            <div style={filterStyles} className="blue_background">
              <span className={styles.progressLabel}>{(step / 2) * 100}%</span>
            </div>
          </div>
        </div>

        <div className={`flex gap1rem column ${styles.data}`}>
          <ApplyUserDetails />

          {step === 1 && <Step1 input={styles.input} form={styles.form} />}
          {step === 2 && <Step2 input={styles.input} />}
        </div>

        <div
          className="flex gap1rem align_center"
          style={{
            alignSelf: "flex-end",
            height: "10%",
          }}
        >
          <ApplyButton
            step={step}
            backgroundColor={step === 1 ? "grey" : "#5596e6"}
            disabled={step === 1}
            text={"Previous"}
            setStep={setStep}
          />

          <ApplyButton
            step={step}
            backgroundColor={step >= 2 ? "grey" : "#5596e6"}
            disabled={step >= 2}
            text={"Next"}
            setStep={setStep}
          />

          <ApplyButton
            step={step}
            backgroundColor={step < 2 ? "grey" : "#5596e6"}
            disabled={step < 2}
            text={"Apply"}
            setStep={setStep}
          />
        </div>
      </div>
    </div>
  );
};

export default Apply;
