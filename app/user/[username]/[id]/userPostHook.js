"use client";
import React, { useEffect, useState } from "react";

const useUserPostsHook = ({ page, id }) => {
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
        const postsQuery = await fetch(
          `http://localhost:4000/api/v1/unauth/user/${id}/posts?page=${pageNo}`,
          {
            next: { revalidate: 100 },
          }
        );
        const res = await postsQuery.json();
        const data = await res.data;
        setHasMore((await data.length) === 5);
        setPosts((prev) => [...prev, ...res.data]);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setLoading(false);
        console.log(err);
      }
    };

    getData();
  }, [id, pageNo, page]);

  return {
    posts,
    hasMore,
    loading,
    error,
  };
};

export default useUserPostsHook;
