import BlogDetails from "@/app/components/blog/details/BlogDetails";
import React from "react";
const page = ({ params }) => {
  const { id } = params;
  return (
    <div className="scroll_y_black_white">
      <div style={{ width: "100%" }}>
        <BlogDetails id={id} />
      </div>
    </div>
  );
};

export default page;
