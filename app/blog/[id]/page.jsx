import BlogDetails from "@/app/components/blog/details/BlogDetails";
import React from "react";
const page = () => {
  return (
    <div className="scroll_y">
      <div style={{ width: "100%" }}>
        <BlogDetails />
      </div>
    </div>
  );
};

export default page;