"use client";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

export const useBlogSearchHook = ({ page, searchName }) => {
  const [hasMore, setHasMore] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://192.168.252.193:4000/api/v1/article/search?query=${searchName}&page=${page}`,
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
    setHasMore(res.length === 5);
    setBlogs((prev) => [...prev, ...res]);
  }, [res]);

  // const res = data?.data || [];
  return {
    blogs,
    error,
    isLoading,
    hasMore,
  };
};
