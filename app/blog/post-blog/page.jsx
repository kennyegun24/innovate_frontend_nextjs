import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import styles from "./styles.module.css";
import Border from "@/app/components/blog/new/Border";

const page = () => {
  return (
    <div className="flex column gap05rem padding1rem">
      <div
        className={`flex gap1rem align_center relative width100 justify_end  `}
      >
        <div className={styles.hoverContainer}>
          <div className={styles.hoverShow}>
            <p className="font12">Use ` ` to make texts bold e.g `bold`</p>
            <p className="font12">
              Use _ _ to make texts in italics e.g _italics_
            </p>
          </div>
          <InfoCircleOutlined className={`pointer ${styles.hoverElement}`} />
        </div>
        <Button className="blue_background white">Publish</Button>
      </div>
      <div className={`flex ${styles.inputDiv}`} style={{ height: "7vh" }}>
        <Input
          style={{ border: "none", order: 2, outline: "none" }}
          className={`font20 text_color background_invisible ${styles.input}`}
          placeholder="Title..."
        />
        <Border style={styles.inputBorder} />
      </div>
      <div className={`flex ${styles.inputDiv2}`} style={{ height: "70vh" }}>
        <TextArea
          style={{ resize: "none", border: "none", order: 2 }}
          className={`background_invisible font18 text_color ${styles.input}`}
          rows={15}
          placeholder="Write article..."
        />
        <Border style={styles.inputBorder} />
      </div>
    </div>
  );
};

export default page;
