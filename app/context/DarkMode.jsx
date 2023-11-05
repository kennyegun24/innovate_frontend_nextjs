"use client";
import { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    let mod = mode === "dark" ? "light" : "dark";
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("innovate_web", mod);
  };

  useEffect(() => {
    document.querySelector(":root").setAttribute("color-scheme", mode);
  }, [mode]);

  useEffect(() => {
    const theme = localStorage.getItem("innovate_web")
      ? localStorage.getItem("innovate_web")
      : "dark";
    setMode(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <div className={`theme background bigContainer relative text_color`}>
          {children}
        </div>
        {/* </PersistGate> */}
      </Provider>
    </ThemeContext.Provider>
  );
};
// export default wrapper.useWrappedStore(ThemeProvider);
