"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
// import image from "public/home_link_logo.svg";
import image from "public/innovateIcon.png";
import { Button } from "antd";
const NavBar = ({ scrollY }) => {
  const length = scrollY > 400;
  const position = length && "sticky";
  const color = length ? "black" : "white";
  const _less_transparent = scrollY <= 400 && "background_invisible";
  return (
    <div
      className={`${position} flex gap2rem justify_between`}
      style={{
        padding: "1rem 5rem",
        top: length ? "0.5rem" : 0,
        background: length ? "#fff" : "transparent",
        borderRadius: length ? "2rem" : "0",
      }}
    >
      <div className={`${color} flex gap2rem align_center`}>
        <Image
          alt=""
          className="roundedImage object-cover"
          src={image}
          width={50}
          height={50}
        />
        <nav className="flex gap15rem align_center">
          <Link className={`${color} fontW600 text_decoration_none`} href="">
            About
          </Link>
          <Link className={`${color} fontW600 text_decoration_none`} href="">
            Enterprise
          </Link>
          <Link className={`${color} fontW600 text_decoration_none`} href="">
            Jobs
          </Link>
          <Link className={`${color} fontW600 text_decoration_none`} href="">
            Creator
          </Link>
        </nav>
      </div>

      <nav className="flex gap15rem align_center">
        <Button className={`${color} fontW600 ${_less_transparent}`}>
          <Link className=" font12 text_decoration_none" href="">
            Login
          </Link>
        </Button>
        <Button
          className={` fontW600 `}
          style={{
            background: length ? "#000" : "#fff",
            color: length ? "#fff" : "#000",
          }}
        >
          <Link className={` fontW600 font12 text_decoration_none`} href="">
            Signup
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default NavBar;
