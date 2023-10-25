"use client";
import React from "react";
import RecommendedPeople from "@/app/components/users/RecommendedUsers";
import { _mock_recommended_users } from "../_mock/recommended_users";
import styles from "./page.module.css";
import { useRef } from "react";

const RecommendedUsers = () => {
  const reference = useRef();
  const loading = false;
  const friends = _mock_recommended_users;
  return (
    <div
      className="scroll_y_black_white flex align_center column"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        borderRight: "1px solid #757474",
      }}
    >
      <div className={`padding1rem sticky navTransparent ${styles.header}`}>
        <h2 className="font20 black-white">Recommended Users</h2>
      </div>
      <div className={styles.recommendedPeopleContainer}>
        <RecommendedPeople
          loading={loading}
          reference={reference}
          data={friends}
        />
      </div>
    </div>
  );
};

export default RecommendedUsers;
