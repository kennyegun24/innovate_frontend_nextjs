"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAuthentication } from "../utils/api_requests/auth";
import { redirect } from "next/dist/server/api-utils";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const { detailsError } = useSelector((state) => state.user);
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSub = async (e) => {
    e.preventDefault();
    try {
      await loginAuthentication(
        {
          data: userData,
        },
        dispatch
      );
      redirect("/feeds");
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
            <h3>Login to your account</h3>
            <h5>Create your own personal account</h5>
          </div>

          <form onChange={(e) => handleInput(e)} onSubmit={onSub}>
            <input name="email" placeholder="Username or Email..." />
            <input name="password" type="password" placeholder="Password..." />
            <button>Register</button>
            <p>
              Don&apos;t have an account?{" "}
              <a href="/register" className="blue text_decoration_none">
                Signup
              </a>
              {detailsError}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
