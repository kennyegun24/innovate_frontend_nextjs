"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.css";
import SearchComponent from "./Search";
import SearchToggle from "./SearchToggle";
import MostLikedBlogs from "./MostLikedBlogs";
import BlogGrid from "./BlogGrid";
import LatestBlogs from "./LatestBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogArticle } from "@/app/redux/blogReducer";
import RollingAnimation from "../animaate/RollingAnimation";
import { LanguageContext } from "@/app/context/LanguageProvider";

const AllBlogs = () => {
  const { translateText } = useContext(LanguageContext);

  const [toggleSearch, setToggleSearch] = useState(false);

  const dispatch = useDispatch();

  const { articles, loading } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchBlogArticle());
  }, [dispatch]);

  const _language = (param) => {
    return translateText("blog." + param);
  };

  const comment_text = _language("cmmt") || "Comments";

  return (
    <div className={`scroll_y_black_white ${styles.container}`}>
      {loading ? (
        <RollingAnimation />
      ) : (
        <>
          <SearchToggle
            setToggleSearch={setToggleSearch}
            toggleSearch={toggleSearch}
            style={styles.searchIconDiv}
          />
          <BlogGrid comment={comment_text} articles={articles} />
          <div className={`${styles.bottomContainer} `}>
            <div className={styles.latest}>
              <LatestBlogs
                text={_language("rcnt") || "Recent Blogs"}
                comment={comment_text}
                articles={articles.slice(5, 10)}
              />
            </div>
            <div
              className={`${toggleSearch ? styles.show : styles.hide} ${
                styles.searchContainer
              }`}
            >
              <SearchComponent
                text={_language("sfb") || "Search for blogs"}
                comment={comment_text}
                style={`background2 ${styles.searchDiv}`}
              />
              <MostLikedBlogs
                text={_language("mlb") || "Most Liked Blogs"}
                comment={comment_text}
                articles={articles.slice(0, 2)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllBlogs;
