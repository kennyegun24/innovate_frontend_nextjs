import React from "react";
import styles from "./editProfile.module.css";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import image from "public/person1.jpg";

const EditProfile = () => {
  const input1 = [
    {
      id: 1,
      name: "",
      label: "Name",
      placeholder: "Name...",
    },
    {
      id: 2,
      name: "",
      label: "Phone Number",
      placeholder: "Phone Number...",
    },
    {
      id: 2,
      name: "",
      label: "Profession",
      placeholder: "Profession...",
    },
  ];
  const input2 = [
    {
      id: 1,
      name: "",
      label: "Location",
      placeholder: "Location...",
    },
    {
      id: 2,
      name: "",
      label: "School",
      placeholder: "School...",
    },
    {
      id: 2,
      name: "",
      label: "Company",
      placeholder: "Company...",
    },
  ];
  const textarea = [
    {
      id: 1,
      name: "",
      label: "Bio",
      placeholder: "Bio...",
    },
    {
      id: 2,
      name: "",
      label: "About",
      placeholder: "About...",
    },
  ];
  return (
    <div className={`${styles.container} background2 `}>
      <Form className="width100 flex column gap1rem">
        <div className={styles.imageDiv}>
          <Image
            src={image}
            className={`roundedImage object-cover ${styles.image}`}
            alt=""
          />
        </div>
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
          <label className="text_color">Header</label>
          <Input
            className={`background text_color ${styles.inputSm}`}
            placeholder="Header..."
          />
        </div>
        {textarea.map((field) => (
          <div
            key={field.id}
            className={`${styles.inputDivBg} flex column gap05rem`}
          >
            <label className="text_color">{field.label}</label>
            <TextArea
              rows={5}
              className={`background text_color ${styles.inputSm}`}
              style={{ resize: "none" }}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default EditProfile;
