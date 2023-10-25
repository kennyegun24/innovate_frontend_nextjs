import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const RecommendedPeople = ({ data, reference, loading }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        className={`${styles.container_small} padding1rem flex column gap1rem`}
      >
        {data.map((user, index) => (
          <Link
            ref={data.length === index + 1 ? reference : null}
            href={`/user/${user.id}`}
            className="flex justify_between text_decoration_none text_color theme"
            key={user.id}
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
                <p className="opacity05 font12">
                  @
                  {user.user_name.length > 10
                    ? user.user_name.slice(0, 10) + "..."
                    : user.user_name}
                </p>
                <p className="font12">{user.header}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {loading && (
        <div>
          <div className="roll" />
        </div>
      )}
    </div>
  );
};

export default RecommendedPeople;
