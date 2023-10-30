import React from "react";
import AccountSettings from "./AccountSettings";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Account = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return <AccountSettings />;
};

export default Account;
