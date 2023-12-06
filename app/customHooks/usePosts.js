"use client";
import { useEffect, useState, useMemo } from "react";
import useSWR from "swr";

const usePostsHook = (page) => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    if (pageNo !== page) {
      setPageNo((prev) => (prev === page ? prev : page));
    }
  }, [page, pageNo]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/v1/unauth/posts?page=${pageNo}`,
    fetcher,
    {
      refreshInterval: null,
      errorRetryInterval: 5000,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryCount: 1,
    }
  );

  const res = useMemo(() => data?.data || [], [data]);
  useEffect(() => {
    setHasMore(res.length === 10);
    setPosts((prev) => [...prev, ...res]);
  }, [res]);
  return {
    posts,
    hasMore,
    isLoading,
    error,
  };
};

export default usePostsHook;
