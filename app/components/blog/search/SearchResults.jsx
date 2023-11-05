import React from "react";
import image from "public/kenny_Resize.png";
import Image from "next/image";
import Link from "next/link";
const SearchResults = ({ styles }) => {
  return (
    <div className="flex column gap1rem">
      <div
        className={`background padding1rem flex column gap05rem ${styles.search_results_div}`}
      >
        <Link
          href={``}
          alt=""
          className="text_color flex gap05rem align_center"
        >
          <Image
            src={image}
            alt=""
            style={{ width: "30px", height: "30px" }}
            className="object-cover roundedImage"
          />
          <p>Kenny elias</p>
        </Link>
        <h2 className="font18">This is the title of the article</h2>
        <Link
          href={``}
          alt=""
          className="text_color flex gap05rem align_center"
        >
          <p className={`font14 ${styles.search_results_text}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            nesciunt, esse at magnam aspernatur nam dolores. Eum excepturi
            laboriosam recusandae. Amet accusantium dignissimos eum. Obcaecati
            quisquam suscipit in voluptate perspiciatis.
          </p>
          <Image
            src={image}
            alt=""
            style={{ width: "100px", height: "100px", borderRadius: "6px" }}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchResults;
