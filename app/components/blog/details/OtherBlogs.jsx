import React, { useCallback, useRef, useState } from "react";
import LatestBlogs from "../LatestBlogs";
// import useSWR from "swr";

const OtherBlogs = ({ id, lang }) => {
  const ref = useRef();
  const [articles, setArticles] = useState([]);
  const [fetched, setFetch] = useState(false);
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   `http://192.168.252.193:4000/api/v1/blogs/${id}`,
  //   fetcher,
  //   {
  //     refreshInterval: null,
  //     errorRetryInterval: 5000,
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //     errorRetryCount: 1,
  //   }
  // );
  const observer = useCallback(
    (node) => {
      if (ref.current) ref.current.disconnect();
      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !fetched) {
          const fetchData = async () => {
            const req = fetch(
              `http://192.168.252.193:4000/api/v1/user/${id}/blogs`,
              {
                next: { revalidate: 10000 },
              }
            );
            const res = (await req).json();
            const data = await res;
            setArticles(data.data);
            setFetch(true);
          };
          fetchData();
        }
      });
      if (node) ref.current.observe(node);
    },
    [id, fetched]
  );

  return (
    <div ref={observer} style={{ width: "100%" }} className="width100">
      <LatestBlogs
        comment={lang("cmmt") || "Comments"}
        articles={articles}
        text={lang("details.obfu") || "Other Blogs from user"}
      />
    </div>
  );
};

export default OtherBlogs;
