"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import RecommendedPeople from "@/app/components/users/RecommendedUsers";
import { users } from "@/app/_mock/users";

const UsersSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const people = users.filter((elem) =>
    elem.name.toLowerCase().includes(query.toLowerCase())
  );
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
        <div className="height100 width100 flex align_center justify_center">
          <h3>No not found</h3>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
