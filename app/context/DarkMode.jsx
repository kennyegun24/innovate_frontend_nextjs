"use client";
import { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store";
// import { PersistGate } from "redux-persist/integration/react";

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
