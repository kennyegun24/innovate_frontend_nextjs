"use client";

import { ThemeContext } from "@/app/context/DarkMode";
import React, { useContext } from "react";
import { BiLocationPlus } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";

const ProfileOverview = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <section style={{ width: "100%" }} className="flex gap1rem">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "35%",
        }}
      >
        <div
          className={`${
            mode === "light" ? "light_background" : "dark_2_background"
          } font14 flex column theme gap05rem padding1rem`}
          style={{ borderRadius: "6px" }}
        >
          <p className="font14">
            <BiLocationPlus /> Location
          </p>
          <p className="font12">Block N18, Flat 3</p>
        </div>
        <div
          className={`${
            mode === "light" ? "light_background" : "dark_2_background"
          } font14 flex column theme gap05rem padding1rem`}
          style={{ borderRadius: "6px" }}
        >
          <p className="font14">
            <FaGraduationCap /> Education
          </p>
          <p className="font12">Oxford University</p>
        </div>
      </div>
      <div
        className={`${
          mode === "light" ? "light_background" : "dark_2_background"
        } font14 flex column theme gap05rem padding1rem`}
        style={{ borderRadius: "6px", width: "60%" }}
      >
        <h4>About Me</h4>
        <p className="font14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          praesentium sunt, quas deserunt, rem voluptatum rerum error
          necessitatibus, temporibus enim a? Non quia incidunt suscipit commodi
          similique ducimus nesciunt repellat. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Eveniet provident natus, saepe dolore et
          quia delectus rem recusandae. Veritatis ab ducimus at? Eos inventore
          beatae accusantium necessitatibus ut explicabo fugit? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quisquam magni enim,
          cupiditate eos qui soluta incidunt corrupti, dolor placeat sequi est!
          Sint voluptatibus dolor officiis nisi nulla debitis dolores quae.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          quaerat ipsa delectus sequi nobis. Saepe, accusantium laboriosam
          ullam, quibusdam laborum, excepturi quaerat quisquam voluptatum
          laudantium minus aliquam. Sed, deserunt exercitationem? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Ducimus, sint quas!
          Magni quidem, officia adipisci labore at, molestiae iusto non numquam
          aliquid, consequuntur consectetur assumenda inventore. Earum cum
          cupiditate sit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rem, vitae. Ipsum veritatis autem esse voluptas itaque beatae
          assumenda, quia officia dolor quos dolores ea? Eligendi et neque nobis
          numquam quae?
        </p>
      </div>
    </section>
  );
};

export default ProfileOverview;