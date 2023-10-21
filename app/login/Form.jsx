"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const Form = () => {
  const [user, setUserData] = useState(null);
  const [err, setErr] = useState(null);
  const query = useSearchParams();
  const getValue = query.get("error");
  useEffect(() => {
    setErr(getValue);
  }, [getValue]);
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSub = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", user);
      if (res?.error) return setErr(getValue);
    } catch (error) {}
  };
  return (
    <div className={`scroll_y_black_white ${styles.container}`}>
      <div className={styles.containerSm}>
        <div className={styles.backgroundContainer}>
          <h4>Welcome back to</h4>
          <h2>Innovate Socials</h2>
        </div>

        <div className={styles.formDiv}>
          {err &&
            setTimeout(() => {
              setErr(null);
            }, 3000) && (
              <span className="padding05rem reverse_background2 font14 red fontW600 textCenter">
                {err}
              </span>
            )}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
