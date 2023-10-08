"use client";
import { createContext } from "react";
import { notification } from "antd";

export const InterractionContext = createContext();

export const InterractionProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const toggleInterraction = ({ word, placement, type, message }) => {
    const openNotification = () => {
      api[type]({
        message: message,
        description: word,
        placement,
        duration: 1.5,
      });
    };
    openNotification();
  };

  return (
    <InterractionContext.Provider
      value={{
        toggleInterraction,
      }}
    >
      <>{contextHolder}</>
      <div>{children}</div>
    </InterractionContext.Provider>
  );
};
