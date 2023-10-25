"use client";
import React from "react";
import styles from "./page.module.css";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ handleSubmit, handleSelect, path, handleInput }) => {
  return (
    <div>
      <div
        className={`flex column gap05rem width100 align_center justify_center ${styles.searchHeader}`}
      >
        <form
          onSubmit={handleSubmit}
          className={`${styles.searchContainer} flex align_center`}
        >
          <FaSearch className={styles.icon} />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search..."
            name="search"
            onChange={(e) => handleInput(e.target.value)}
          />
        </form>
        <div className={`flex justify_between ${styles.buttonDiv}`}>
          <button
            onClick={() => handleSelect("/search")}
            className={`pointer ${path === "/search" && styles.borderBottom}`}
          >
            Post
          </button>
          <button
            onClick={() => handleSelect("/search/users")}
            className={`pointer ${
              path === "/search/users" && styles.borderBottom
            }`}
          >
            People
          </button>
          <button
            onClick={() => handleSelect("/search/users")}
            className={`pointer ${
              path === "/search/users" && styles.borderBottom
            }`}
          >
            Companies
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
