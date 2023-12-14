"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import RecommendedPeople from "@/app/components/users/RecommendedUsers";
import { _mock_recommended_users } from "@/app/_mock/recommended_users";
import { useRef } from "react";
import { getRandomAnimal } from "./UserSearchHelper";
import { useCallback } from "react";
import useSearchUserHook from "@/app/customHooks/useSearchUserHook";
import { useState } from "react";
import { useEffect } from "react";
import SearchEmpty from "@/app/components/no-content/SearchEmpty";

const UsersSearch = () => {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [textQuery, setTextQuery] = useState("");
  const observer = useRef();
  const { error, hasMore, loading, users } = useSearchUserHook(page, textQuery);

  useEffect(() => {
    if (query.length > 3) {
      setTextQuery(query);
      setPage(1);
    }
  }, [query]);
  const lastUserRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
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
      ) : users && users.length > 0 ? (
        <RecommendedPeople
          reference={lastUserRef}
          data={users}
          loading={loading}
        />
      ) : (
        <div className="height100 padding1rem textCenter width100 flex align_center justify_center">
          <SearchEmpty text={"User not found"} />
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
