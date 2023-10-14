"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import { authentication } from "@/app/request/auth";
import { db } from "../firebase";
import { Timestamp, doc } from "firebase/firestore";

const Registration = () => {
  const [userData, setUserData] = useState(null);
  const [file, setFile] = useState(null);

  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSub = async (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    try {
      await authentication({
        data: userData,
        file,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`scroll_y_black_white ${styles.container}`}>
      <div className={styles.containerSm}>
        <div className={styles.backgroundContainer}>
          <h4>Welcome back to</h4>
          <h2>Innovate Socials</h2>
        </div>

        <div className={styles.formDiv}>
          <div className="flex align_center column">
            <h3>CREATE ACCOUNT</h3>
            <h5>Create your own personal account</h5>
          </div>

          <form onChange={(e) => handleInput(e)} onSubmit={onSub}>
            <input name="user_name" placeholder="Username..." />
            <input name="name" placeholder="Name..." />
            <input name="email" placeholder="Email..." />
            <input name="password" placeholder="Passeord..." />
            <button>Register</button>
            <input
              style={{ padding: "initial" }}
              type="file"
              name="image"
              onChange={(e) => setFile(e.target.files[0])}
              id=""
            />
            <p>
              Have an account?{" "}
              <a href="/login" className="blue text_decoration_none">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
