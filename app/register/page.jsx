import React from "react";
import styles from "./register.module.css";

const Registration = () => {
  return (
    <div className={styles.container}>
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

          <form>
            <input placeholder="Username..." />
            <input placeholder="Name..." />
            <input placeholder="Email..." />
            <input placeholder="Passeord..." />
            <button>Register</button>
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
