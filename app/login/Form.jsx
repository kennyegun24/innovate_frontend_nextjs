"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { loginFailure } from "../redux/user_auth/userReducer";
import { signIn } from "next-auth/react";

const Form = () => {
  const [user, setUserData] = useState(null);
  const dispatch = useDispatch();
  const { detailsError, currentUser } = useSelector((state) => state.user);
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSub = async (e) => {
    e.preventDefault();
    try {
      signIn("credentials", user);
      currentUser && redirect("/feeds");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(detailsError);
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
            </p>
            {detailsError &&
              setTimeout(() => {
                dispatch(loginFailure(false));
              }, 2000) && (
                <span className="font14 red fontW600 textCenter">
                  {detailsError}
                </span>
              )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
