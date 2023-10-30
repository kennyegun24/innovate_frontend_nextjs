"use client";
import { useEffect, useState } from "react";
import { unauthRailsRequest } from "../utils/publicRequest";

const usePostsHook = (page) => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    if (pageNo !== page) {
      setPageNo((prev) => (prev === page ? prev : page));
    }
  }, [page, pageNo]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const postsQuery = await unauthRailsRequest.get(
          `unauth/posts?page=${pageNo}`
        );
        const res = await postsQuery.data;
        const data = await res.data;
        setHasMore((await data.length) === 10);
        setPosts((prev) => [...prev, ...res.data]);
        setLoading(false);
      } catch (Err) {
        setError("Something went wrong");
        setLoading(false);
        throw Error;
      }
    };
    getData();
  }, [pageNo]);
  return {
    posts,
    hasMore,
    loading,
    error,
  };
};

export default usePostsHook;
