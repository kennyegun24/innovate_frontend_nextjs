"use client";
import React, { useState, useCallback, useEffect } from "react";
import styles from "./layout.module.css";
import SearchInput from "./searchInput";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const [tab, setTab] = useState(1);
  const [text, setText] = useState("");
  const handleSelect = useCallback((param) => {
    setTab((previous) => (previous === param ? previous : param));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const value = form.get("search");
    const queryValue = encodeURI(value);
    tab === 1 && router.push(`/search?query=${queryValue}`);
    tab === 2 && router.push(`/search/users?query=${queryValue}`);
    tab === 3 && router.push(`/search/users?query=${queryValue}`);
  };
  const handleInput = useCallback((e) => {
    setText(e);
  }, []);

  useEffect(() => {
    tab === 1 && router.push(`/search?query=${text}`);
    tab === 2 && router.push(`/search/users?query=${text}`);
    tab === 3 && router.push(`/search/users?query=${text}`);
  }, [tab, router]); /* eslint-disable-line */
  return (
    <div
      className={`flex column gap05rem scroll_y_black_white ${styles.container}`}
    >
      <div className={`sticky ${styles.searchLayout}`}>
        <SearchInput
          handleSubmit={handleSubmit}
          tab={tab}
          handleInput={handleInput}
          handleSelect={handleSelect}
        />
      </div>
      {children}
    </div>
  );
};

export default Layout;
