import React from "react";
import Image from "next/image";
const ProfileExpeprienceAll = ({ data }) => {
  return (
    <div className="flex column gap2rem padding05rem">
      {data?.map((experience, index) => (
        <div key={index} className="flex gap05rem">
          <Image
            height={50}
            width={50}
            src={experience.image || experience.img}
            alt="image"
          />
          <div className="flex gap05rem column">
            <h3 className="font14">{experience.title || experience.degree}</h3>
            <div className="flex gap05rem">
              <p className="font12 fontW600">
                {experience.school_name || experience.company_name}
              </p>
              {
                <p className="font12 fontW600">
                  {experience.type || experience.course}
                </p>
              }
            </div>
            {experience.country && (
              <div className="flex gap05rem">
                <p className="font12">{experience.country}</p>
                <p className="font12">{experience.location}</p>
              </div>
            )}
            <div className="flex gap05rem">
              <p className="font12">{experience.date || experience.year}</p>
            </div>

            <p className="white-space font14 lnH18">{experience.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileExpeprienceAll;
