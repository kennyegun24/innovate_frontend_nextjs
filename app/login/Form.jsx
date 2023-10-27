"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [user, setUserData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSub = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await signIn("credentials", { ...user, redirect: false });
      setLoading(false);
      if (res.ok) return route.push("/feeds");
      if (res?.error) return setErr(res.error);
    } catch (error) {
      setLoading(false);
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
          {err &&
            setTimeout(() => {
              setErr(null);
            }, 3000) && (
              <span className="width100 padding05rem reverse_background2 font14 red fontW600 textCenter">
                {err}
              </span>
            )}
          <div className="flex align_center column">
            <h3>Login to your account</h3>
            <h5>Create your own personal account</h5>
          </div>

          <form onChange={(e) => handleInput(e)} onSubmit={onSub}>
            <input
              disabled={loading ? true : false}
              name="email"
              placeholder="Username or Email..."
            />
            <input
              disabled={loading ? true : false}
              name="password"
              type="password"
              placeholder="Password..."
            />
            <button
              disabled={loading ? true : false}
              style={{
                background: loading ? "grey" : "#18191a",
              }}
            >
              {loading ? "Logging you in..." : "Login"}
            </button>
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
