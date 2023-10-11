"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import image from "public/innovateIcon.png";
import { Button } from "antd";
import { KeyOutlined, LoginOutlined } from "@ant-design/icons";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

const NavBar = ({ scrollY }) => {
  const length = scrollY >= 350;
  const position = scrollY >= 400 && "sticky";
  const color = length ? "black" : "white";
  const _less_transparent = scrollY <= 390 && "background_invisible";
  const [hideBar, setHideBar] = useState(true);
  return (
    <div
      className={`${position} ${
        length ? styles.container_style1 : styles.container_style2
      } flex gap2rem justify_between`}
    >
      <div
        className={`${color} ${styles.between} width100 flex gap2rem align_center`}
      >
        <Link href="">
          <Image
            alt=""
            className="roundedImage object-cover"
            src={image}
            width={40}
            height={40}
          />
        </Link>
        <FaBars
          onClick={() => setHideBar((prev) => !prev)}
          className={styles.bar}
        />
        <nav className={`${styles.nav} flex gap15rem align_center`}>
          <Link
            className={`${color} fontW600 text_decoration_none`}
            href="/about"
          >
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

      <nav
        className={`${styles.mobileNavigations} ${
          hideBar ? styles.hide : styles.show
        } ${
          length ? styles.white_background : styles.dark_background
        } flex gap2rem align_center`}
      >
        <Link
          className={`${color} fontW600 text_decoration_none`}
          href="/about"
        >
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
        <Button
          className={`${color} ${styles.btn_style} fontW600 ${_less_transparent}`}
          icon={<LoginOutlined />}
        >
          <Link className=" font12 text_decoration_none" href="">
            Login
          </Link>
        </Button>
        <Button
          icon={<KeyOutlined />}
          className={` ${styles.btn_style} fontW600 ${
            length ? styles.btn_style1 : styles.btn_style2
          }`}
          style={{}}
        >
          <Link className={` fontW600 font12 text_decoration_none`} href="">
            Signup
          </Link>
        </Button>
      </nav>

      <nav className={`${styles.nav} flex gap15rem align_center`}>
        <Button
          className={`${color} fontW600 ${_less_transparent}`}
          icon={<LoginOutlined />}
        >
          <Link className=" font12 text_decoration_none" href="">
            Login
          </Link>
        </Button>
        <Button
          icon={<KeyOutlined />}
          className={` fontW600 ${
            length ? styles.btn_style1 : styles.btn_style2
          }`}
          style={{}}
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
