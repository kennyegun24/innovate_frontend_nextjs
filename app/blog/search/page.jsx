import React from "react";
import styles from "./page.module.css";
import SearchItem from "@/app/components/blog/search/SearchItem";
import SearchResults from "@/app/components/blog/search/SearchResults";
import Back from "@/app/components/blog/search/Back";

const page = () => {
  return (
    <div
      className={`${styles.container} scroll_y_black_white background2 flex column gap2rem`}
    >
      <Back />
      <SearchItem styles={styles} />
      <SearchResults styles={styles} />
    </div>
  );
};

export default page;
