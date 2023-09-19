"use client";
import React, { useContext } from "react";
import { FaCheckCircle, FaUserPlus } from "react-icons/fa";
import Image from "next/image";
import { users } from "@/app/_mock/users";
import { FollowedContext } from "@/app/context/FollowedContext";

const FiveRecommendUser = () => {
  const { toggle, setAction } = useContext(FollowedContext);
  return (
    <div
      className={`sticky top15Vh marginTop1rem flex column gap1rem theme br6px padding1rem background2`}
    >
      <h3 className="font16">Suggested Friends</h3>

      {users.map((user) => (
        <>
          <hr />
          <div className={`flex justify_between align_center`}>
            <div className="flex align_center gap1rem">
              <Image
                height={45}
                width={45}
                alt=""
                src={user.image}
                className="object-cover roundedImage"
              />
              <div>
                <p className="font14 fontW600">{user.name}</p>
                <p className="font10">{user.profession}</p>
              </div>
            </div>
            {user.isFollowed === false ? (
              <FaUserPlus
                className="font18 pointer"
                onClick={() => {
                  toggle();
                  setAction(
                    `You have just followed the human named ${user.name}`
                  );
                  user.isFollowed = true;
                }}
              />
            ) : (
              <FaCheckCircle className="font18" />
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default FiveRecommendUser;
