import React from "react";
import styles from "./allJobs.module.css";
import Image from "next/image";
import { jobs } from "@/app/_mock/jobs";
import { convertTime } from "@/app/helpers/general";
import Link from "next/link";

const AllJobs = () => {
  return (
    <div className="flex column gap05rem ">
      {jobs.map((job) => (
        <>
          <Link
            href="/jobs/1"
            className="flex gap1rem text_decoration_none theme text_color"
          >
            <Image
              src={job.image}
              alt=""
              height={50}
              width={50}
              className="object-cover"
            />
            <div className="flex column gap2rem">
              <div className="flex gap05rem column">
                <h3 className="font18 blue">{job.role}</h3>
                <p className="font14">Anonymous</p>
                <p className="font12">Dublin, Ireland</p>
              </div>
              <p className="font12 opacity05 blue fontW600">
                {job.created_at}
                {/* {convertTime(job.created_at)} */}
              </p>
            </div>
          </Link>
          <hr className="hr" />
        </>
      ))}
    </div>
  );
};

export default AllJobs;
