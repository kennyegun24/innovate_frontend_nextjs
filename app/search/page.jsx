"use client";
import { otherUserDetails } from "@/app/_mock/user_details";
import PostCard from "@/app/components/postCard/PostCard";
import { useSearchParams } from "next/navigation";
import React from "react";
import SearchEmpty from "../components/no-content/SearchEmpty";

const PostsSearch = ({}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const posts =
    query &&
    otherUserDetails
      .map((elem) =>
        elem.posts.filter((ele) =>
          ele.text.toLowerCase().includes(query.toLowerCase())
        )
      )
      .flat();
  return (
    <div className="height100">
      {query === "" || query === undefined || query === null ? (
        <h2
          style={{ height: "100%" }}
          className="flex align_center justify_center"
        >
          Make a search
        </h2>
      ) : posts && posts.length > 0 ? (
        <PostCard data={posts.sort((a, b) => b.text.length - a.text.length)} />
      ) : (
        <div className="height100 width100 flex align_center justify_center">
          <SearchEmpty text={"Search came empty"} />
        </div>
      )}
    </div>
  );
};

export default PostsSearch;
