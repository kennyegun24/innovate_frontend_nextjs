"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import RecommendedPeople from "@/app/components/users/RecommendedUsers";
import { _mock_recommended_users } from "@/app/_mock/recommended_users";

const UsersSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const people =
    query &&
    _mock_recommended_users.filter((elem) =>
      elem.name.toLowerCase().includes(query.toLowerCase())
    );
  const random = ["goat", "dog", "antelope", "gazelle", "chimp", "lion"];
  const getRandomAnimal = () => {
    let finalResp = random[Math.floor(Math.random() * random.length)];
    return finalResp;
  };
  console.log(getRandomAnimal());
  return (
    <div className="height100 width100">
      {query === "" || query === undefined || query === null ? (
        <h2
          style={{ height: "100%" }}
          className="flex align_center justify_center"
        >
          Make a search
        </h2>
      ) : people && people.length > 0 ? (
        <RecommendedPeople data={people} />
      ) : (
        <div className="height100 padding1rem textCenter width100 flex align_center justify_center">
          <h3>
            No human called {query} was found... searching for a{" "}
            {getRandomAnimal()}?
          </h3>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
