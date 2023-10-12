import React from "react";
import styles from "./thirdComp.module.css";
import Link from "next/link";

const ThirdComp = () => {
  return (
    <div
      style={{ padding: "5rem 0", background: "#fff" }}
      className={`flex gap5rem column align_center ${styles.container}`}
    >
      <div className={`${styles.headerDiv} flex column textCenter`}>
        <h2>Most people start small... We start big!</h2>
        <h4>
          Have an organization you need registered? Or looking to have a real
          voice? Try us today!
        </h4>
        <div
          className={`${styles.buttonDiv} flex gap1rem align_center justify_center`}
        >
          <Link className="text_decoration_none " href={"/login"}>
            <button className={`pointer ${styles.button1}`}>
              Have an account? Login!
            </button>
          </Link>
          <Link className="text_decoration_none " href={"/register"}>
            <button className={`pointer ${styles.button}`}>
              Don&apos;t have an account? Signup!
            </button>
          </Link>
        </div>
      </div>

      <div className={`${styles.metricsDiv} flex justify_between align_center`}>
        <div className="gap05rem align_center flex column">
          <span className={styles.metricPercent}>30%</span>
          <span>Project completion</span>
        </div>
        <div className="gap05rem align_center flex column">
          <span className={styles.metricPercent}>20%</span>
          <span>Backend Percentage</span>
        </div>
        <div className="gap05rem align_center flex column">
          <span className={styles.metricPercent}>40%</span>
          <span>Frontend Percentage</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdComp;
