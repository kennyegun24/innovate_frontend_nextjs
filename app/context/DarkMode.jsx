"use client";
import { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.querySelector(":root").setAttribute("color-scheme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <Provider store={store}>
        <div className={`theme background bigContainer relative text_color`}>
          {children}
        </div>
      </Provider>
    </ThemeContext.Provider>
  );
};
// export default wrapper.useWrappedStore(ThemeProvider);
