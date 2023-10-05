"use client";

import { _mock_job_details } from "@/app/_mock/job_details";
import { company_capacity_converter } from "@/app/helpers/general";
import { Button } from "antd";
import React, { useContext } from "react";
import { BiArrowBack, BiBriefcase, BiBuildingHouse } from "react-icons/bi";
import { FollowedContext } from "@/app/context/FollowedContext";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const Page = () => {
  function wrapLinksWithAnchorTags(text) {
    const urlRegex = /(?:https?:\/\/|www\.)\S+/gi;
    const textWithLinks = text.replace(urlRegex, (url) => {
      const linkName = url
        .replace(/^(https?:\/\/)?(www\.)?/, "")
        .replace(/\/+/g, ".");
      return `<a class="blue" href="${url}" target="_blank">${linkName}</a>`;
    });

    return { __html: textWithLinks };
  }
  const { setApply } = useContext(FollowedContext);
  const router = useRouter();

  return (
    <div
      className={`${styles.container} width100 scroll_y white-space padding05rem flex column gap1rem`}
      style={{ textAlign: "justify" }}
    >
      <div
        className={`flex align_center gap05rem ${styles.back_btn}`}
        onClick={() => router.back()}
      >
        <BiArrowBack />
        <p>Back</p>
      </div>
      <div className={`flex column gap02rem ${styles.subContainer}`}>
        <h2 className="blue font16">{_mock_job_details.company_name}</h2>
        <h3 className="blue font16">{_mock_job_details.title}</h3>
        <div className="flex gap02rem align_center">
          <BiBriefcase className="font16" />
          <p className="font12">{_mock_job_details.level_required}</p>
          <span className="fontW600">{"·"}</span>
          <p className="font12">{_mock_job_details.location}</p>
        </div>
        <div className="flex gap02rem align_center">
          <BiBuildingHouse className="font16" />
          <p className="font12">
            {company_capacity_converter(_mock_job_details.capacity)} employees
          </p>
        </div>
      </div>

      <Button
        style={{ backgroundColor: "transparent", alignSelf: "flex-start" }}
        className="text_color"
        onClick={() => setApply(true)}
      >
        Apply
      </Button>
      <h4>Job Description</h4>
      <div className="flex column gap02rem">
        <h4>Introduction</h4>
        <p
          className="font14 text_color"
          dangerouslySetInnerHTML={wrapLinksWithAnchorTags(
            _mock_job_details.desc
          )}
        ></p>
      </div>
      <div className="flex column gap02rem">
        <h4>Responsibilities</h4>

        {_mock_job_details.responsibilities.split("\n").map((each, index) => (
          <li key={index} className="font12 text_color">
            {each}
          </li>
        ))}
      </div>
      <div className="flex column gap02rem">
        <h4>Qualifications</h4>

        {_mock_job_details.qualifications.split("\n").map((each, index) => (
          <li key={index} className="font12 text_color">
            {each}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Page;
