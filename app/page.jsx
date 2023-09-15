"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useContext } from "react";
import { ThemeContext } from "./context/DarkMode";

export default function Home() {
  const { toggle, mode } = useContext(ThemeContext);

  return <div>{/* <button onClick={toggle}>click</button> */}</div>;
}
