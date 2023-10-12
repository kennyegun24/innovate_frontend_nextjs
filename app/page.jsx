"use client";
import { useContext, useEffect } from "react";
import { authState } from "./utils/session";
import { redirect } from "next/navigation";
import NavBar from "./components/landingPage/NavBar";
import { HeightContext } from "./context/HeightContext";
import TopComponent from "./components/landingPage/TopComponent";
import ThirdComp from "./components/landingPage/ThirdComp";
import Footer from "./components/landingPage/Footer";

export default function Home() {
  const { scrollY, setElement } = useContext(HeightContext);
  if (authState) {
    redirect("/feeds");
  }

  useEffect(() => {
    setElement("landingPage");
  }, []);
  return (
    <div className="landingPage scroll_y_black_white flex column gap1rem">
      <NavBar scrollY={scrollY} />
      <div>
        <TopComponent />
        <ThirdComp />
        <Footer />
      </div>
    </div>
  );
}
