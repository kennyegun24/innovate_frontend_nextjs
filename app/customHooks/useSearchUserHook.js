"use client";
import { useEffect, useState } from "react";
import { unauthRailsRequest } from "../utils/publicRequest";

const useSearchUserHook = (page, textQuery) => {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    setUsers([]);
  }, [textQuery]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      console.log("first");
      if (textQuery.length > 3) {
        const searchQuery = await unauthRailsRequest.get(
          `users/search?query=${textQuery}&page=${page}`
        );
        const res = await searchQuery.data;
        const data = await res.data;
        setHasMore((await data.length) === 10);
        setUsers((prev) => [...prev, ...res.data]);
        setLoading(false);
      }
    };
    getData();
  }, [textQuery, page]);
  return {
    users,
    hasMore,
    loading,
    error,
  };
};

export default useSearchUserHook;
