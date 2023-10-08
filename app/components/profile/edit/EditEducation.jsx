import React from "react";
import styles from "./editProfile.module.css";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const EditEducation = () => {
  const input1 = [
    {
      id: 1,
      name: "",
      label: "School Name",
      placeholder: "School Name...",
    },
    {
      id: 2,
      name: "",
      label: "Course of study",
      placeholder: "Course of study...",
    },
  ];
  const input2 = [
    {
      id: 1,
      name: "",
      label: "Start Date",
      placeholder: "Start Date...",
    },
    {
      id: 2,
      name: "",
      label: "End Date",
      placeholder: "End Date...",
    },
  ];

  return (
    <div className={`${styles.container} background2 `}>
      <Form className="width100 flex column gap1rem">
        <div className={` ${styles.inputDivBg} flex justify_between gap05rem`}>
          {input1.map((inp) => (
            <div
              key={inp.id}
              className={`${styles.inputDiv} flex column gap05rem`}
            >
              <label className="text_color">{inp.label}</label>
              <Input
                placeholder={inp.placeholder}
                className={`background text_color ${styles.inputSm}`}
              />
            </div>
          ))}
        </div>

        <div className={` ${styles.inputDivBg} flex justify_between gap05rem`}>
          {input2.map((inp) => (
            <div
              key={inp.id}
              className={`${styles.inputDiv} flex column gap05rem`}
            >
              <label className="text_color">{inp.label}</label>
              <Input
                placeholder={inp.placeholder}
                className={`background text_color ${styles.inputSm}`}
              />
            </div>
          ))}
        </div>

        <div className={`${styles.inputDivBg} flex column gap05rem`}>
          <label className="text_color">Description</label>
          <TextArea
            rows={7}
            className={`background text_color ${styles.inputSm}`}
            style={{ resize: "none" }}
            placeholder="Description..."
          />
        </div>
      </Form>
    </div>
  );
};

export default EditEducation;
