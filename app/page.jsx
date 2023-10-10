"use client";
import { useContext } from "react";
import { authState } from "./utils/session";
import { redirect } from "next/navigation";
import NavBar from "./components/landingPage/NavBar";
import { HeightContext } from "./context/HeightContext";
import TopComponent from "./components/landingPage/TopComponent";

export default function Home() {
  const { scrollY, setElement } = useContext(HeightContext);
  if (authState) {
    redirect("/feeds");
  }
  if (typeof window !== "undefined") {
    setElement("landingPage");
  }
  return (
    <div className="landingPage scroll_y flex column gap1rem">
      <NavBar scrollY={scrollY} />
      <div>
        <TopComponent />
      </div>
    </div>
  );
}
