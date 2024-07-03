"use client";
import { createContext, useEffect, useState } from "react";

export const ConnectionContext = createContext();

export const ConnectionProvider = ({ children }) => {
  const [connection, setConnection] = useState(true);
  useEffect(() => {
    setInterval(() => {
      const connectionCheck = navigator.onLine;
      setConnection(connectionCheck);
    }, 60000);
  }, []);
  console.log(connection);
  return (
    <ConnectionContext.Provider>
      {!connection && (
        <div className="no_network_div flex gap1rem column align_center">
          <div className="flex column gap02rem align_center">
            <h3>You are currently offline</h3>
            <p>Check your internet connection</p>
          </div>

          <button className="no_connection_retry_btn">Click to retry</button>
        </div>
      )}
      {children}
    </ConnectionContext.Provider>
  );
};
