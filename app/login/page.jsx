import React from "react";
import Form from "./Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <Form />;
};

export default page;
