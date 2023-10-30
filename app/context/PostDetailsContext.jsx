"use client";
import { createContext, useState } from "react";

export const PostDetailsContext = createContext();

export const PostDetailsProvider = ({ children }) => {
  const [postData, setPostData] = useState(null);
  return (
    <PostDetailsContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostDetailsContext.Provider>
  );
};
