import React from "react";
import Overview from "./Overview";

const OtherUserOverview = ({ params }) => {
  const { id } = params;
  return <Overview id={id} />;
};

export default OtherUserOverview;
