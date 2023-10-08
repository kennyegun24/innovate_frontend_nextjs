import { numberFormat } from "@/app/utils/general";
import React from "react";

const Comment = ({ count }) => {
  return <p className="font10">Comment. {numberFormat(count)}</p>;
};

export default Comment;
