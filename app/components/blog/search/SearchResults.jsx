"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useBlogSearchHook } from "@/app/customHooks/useBlogSearch";
const SearchResults = ({ styles }) => {
  const search = useSearchParams();
  const searchName = search.get("query");
  const [page, setPage] = useState(1);
  const { blogs, isLoading, error, hasMore } = useBlogSearchHook({
    page: page,
    searchName: searchName,
  });

  return (
    <div className="flex column gap1rem relative">
      {blogs.length > 0 ? (
        <>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`background padding1rem flex column gap05rem ${styles.search_results_div}`}
            >
              <Link
                href={``}
                alt=""
                className="text_color flex gap05rem align_center"
              >
                <Image
                  src={blog.author_image}
                  alt=""
                  className="object-cover roundedImage"
                  height={30}
                  width={30}
                />
                <p>{blog.author_name}</p>
              </Link>
              <h2 className="font16">{blog.title}</h2>
              <Link
                href={`/blog/${blog.author_name}/${blog.id}`}
                alt=""
                className="text_color flex gap05rem align_center"
              >
                <p className={`font14 ${styles.search_results_text}`}>
                  {blog.text.slice(0, 150)}
                </p>
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt=""
                    style={{
                      height: "100px",
                      maxWidth: "100px",
                      minWidth: "100px",
                      borderRadius: "6px",
                    }}
                    className="object-cover"
                    height={100}
                    width={100}
                  />
                )}
              </Link>
            </div>
          ))}
          {hasMore && (
            <div className={styles.buttonDiv}>
              <button
                className={`${styles.button} blue_background white-black padding05rem width_fit auto font18`}
                onClick={() => setPage((prev) => prev + 1)}
              >
                View more
              </button>
            </div>
          )}
        </>
      ) : (
        <p
          className={`flex align_center justify_center width100 ${styles.center}`}
        >
          Search came empty
        </p>
      )}
    </div>
  );
};

export default SearchResults;
