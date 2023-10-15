"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import SearchComponent from "./Search";
import SearchToggle from "./SearchToggle";
import MostLikedBlogs from "./MostLikedBlogs";
import BlogGrid from "./BlogGrid";
import LatestBlogs from "./LatestBlogs";

const AllBlogs = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div className={`scroll_y ${styles.container}`}>
      <SearchToggle
        setToggleSearch={setToggleSearch}
        toggleSearch={toggleSearch}
        style={styles.searchIconDiv}
      />
      <BlogGrid />
      <div className={`${styles.bottomContainer} `}>
        <LatestBlogs />
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
