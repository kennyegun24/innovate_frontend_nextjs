import React from "react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import styles from "./styles.module.css";

const RecommendedPeople = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        className={`${styles.container_small} border scroll_y padding1rem flex column gap1rem`}
      >
        {data.map((user) => (
          <Link
            href={`/user/${user.user_id}`}
            className="flex justify_between text_decoration_none text_color theme"
            key={user.user_id}
          >
            <div className="flex gap1rem">
              <div>
                <Image
                  src={user.image}
                  alt="image"
                  height={40}
                  width={40}
                  className="roundedImage object-cover"
                />
              </div>
              <div>
                <h3 className="font16">{user.name}</h3>
                <p className="opacity05 font12">@{user.username}</p>
                <p className="font12">{user.header}</p>
              </div>
            </div>
            <Button
              style={{ backgroundColor: "transparent" }}
              className="text_color"
            >
              Following
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPeople;
