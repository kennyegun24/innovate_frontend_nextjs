import React from "react";
import styles from "./login.module.css";

const Login = () => {
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

          <form>
            <input placeholder="Username or Email..." />
            <input placeholder="Passeord..." />
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

export default Login;
