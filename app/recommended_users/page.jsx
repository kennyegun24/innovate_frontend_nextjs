import React from "react";
import ProfileFriends from "../components/profile/ProfileFriends/ProfileFriends";
import { users } from "../_mock/users";
import RecommendedPeople from "@/app/components/users/RecommendedUsers";
import { _mock_recommended_users } from "../_mock/recommended_users";

const RecommendedUsers = () => {
  const friends = _mock_recommended_users;
  return (
    <div
      className="scroll_y"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        borderRight: "1px solid #757474",
      }}
    >
      <RecommendedPeople data={friends} />
    </div>
  );
};

export default RecommendedUsers;
