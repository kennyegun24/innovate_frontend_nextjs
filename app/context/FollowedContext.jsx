"use client";
import { createContext, useState } from "react";
import PageFollowed from "../components/popUp/PageFollowed";
import Apply from "../jobs/[id]/apply/Apply";
import ApplicationSuccess from "../jobs/[id]/apply/ApplicationSuccess";

export const FollowedContext = createContext();

export const FollowedProvider = ({ children }) => {
  const [action, setAction] = useState(null);
  const [followLike, setFollowLike] = useState(false);
  const [apply, setApply] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggle = () => {
    if (followLike) {
      clearTimeout(timeoutRef);
      setFollowLike(true);
      timeoutRef = setTimeout(() => {
        setFollowLike(false);
      }, 2000);
    } else {
      setFollowLike(true);
      timeoutRef = setTimeout(() => {
        setFollowLike(false);
      }, 2000);
    }
  };

  let timeoutRef = null; // Declare a variable to store the timeout reference

  return (
    <FollowedContext.Provider
      value={{ toggle, action, followLike, setAction, setApply, setSuccess }}
    >
      <div>
        {children}
        {followLike && <PageFollowed action={action} />}
        {apply && <Apply />}
        {success && <ApplicationSuccess />}
      </div>
    </FollowedContext.Provider>
  );
};
