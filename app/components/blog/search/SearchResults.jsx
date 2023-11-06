"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useBlogSearchHook } from "@/app/customHooks/useBlogSearch";
import { LanguageContext } from "@/app/context/LanguageProvider";

const SearchResults = ({ styles }) => {
  const { translateText } = useContext(LanguageContext);

  const _language = (param) => {
    return translateText("blog.search." + param);
  };
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
              className={`background flex column gap05rem ${styles.search_results_div}`}
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
                <p className="font14">{blog.author_name}</p>
              </Link>
              <h2 className="font16">{blog.title}</h2>
              <Link
                href={`/blog/${blog.author_name}/${blog.id}`}
                alt=""
                className={`text_color flex gap05rem align_center ${styles.mobile_column}`}
              >
                <p className={`font14 ${styles.search_results_text}`}>
                  {blog.text.slice(0, 150)}
                </p>
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt=""
                    className={`object-cover ${styles.image}`}
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
          {_language("emt_srh") || "Search came empty"}
        </p>
      )}
    </div>
  );
};

export default SearchResults;
