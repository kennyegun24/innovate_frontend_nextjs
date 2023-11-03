"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SearchComponent from "./Search";
import SearchToggle from "./SearchToggle";
import MostLikedBlogs from "./MostLikedBlogs";
import BlogGrid from "./BlogGrid";
import LatestBlogs from "./LatestBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogArticle } from "@/app/redux/blogReducer";

const AllBlogs = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(fetchBlogArticle());
  }, [dispatch]);
  return (
    <div className={`scroll_y_black_white ${styles.container}`}>
      <SearchToggle
        setToggleSearch={setToggleSearch}
        toggleSearch={toggleSearch}
        style={styles.searchIconDiv}
      />
      <BlogGrid articles={articles} />
      <div className={`${styles.bottomContainer} `}>
        <div className={styles.latest}>
          <LatestBlogs text="Liked blogs" articles={articles} />
        </div>
        <div
          className={`${toggleSearch ? styles.show : styles.hide} ${
            styles.searchContainer
          }`}
        >
          <SearchComponent style={`background2 ${styles.searchDiv}`} />
          <MostLikedBlogs />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
