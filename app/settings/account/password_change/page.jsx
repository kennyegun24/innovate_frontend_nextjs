import React from "react";
import styles from "./page.module.css";
const ChangePassword = () => {
  return (
    <div className={styles.container}>
      <section className={`flex column gap1rem`}>
        <h3>Change Password</h3>
        <p className="font12 opacity07">
          Any suspicious activity? Change password.
        </p>
      </section>

      <section className={`flex gap1rem ${styles.subContainer} column`}>
        <p className="font14 opacity07 padding05rem background2">
          Change password (You will receive an email of confirmation)
        </p>
        <section className={`flex column gap1rem ${styles.paddingLeft}`}>
          <div className={styles.inputDiv}>
            <label htmlFor="old">Old Password</label>
            <input placeholder="Old Password..." />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="old">New Password</label>
            <input placeholder="New Password..." />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ChangePassword;
