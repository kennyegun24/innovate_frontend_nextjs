"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useContext } from "react";
import { ThemeContext } from "./context/DarkMode";
import { authState } from "./utils/session";
import { redirect } from "next/navigation";

export default function Home() {
  if (authState) {
    redirect("/feeds");
  }

  return <div>{/* <button onClick={toggle}>click</button> */}</div>;
}
