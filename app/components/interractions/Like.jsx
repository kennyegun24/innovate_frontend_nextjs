import { numberFormat } from "@/app/utils/general";
import React from "react";

const Like = ({ count }) => {
  return <p className="font10">Like. {numberFormat(count)}</p>;
};

export default Like;
