import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./page.module.css";
const DeactivateAccount = () => {
  return (
    <div className={styles.container}>
      <section className="flex column gap1rem">
        <h3 className="red">Deactivate your account</h3>
        <p className={`red opacity07 ${styles.headerText}`}>
          Are you sure you want to deactivate your account?
        </p>
      </section>

      <section className={`flex gap1rem ${styles.subContainer} column`}>
        <p className="font14 red fontW600 padding05rem background2">
          DEACTIVATE YOUR ACCOUNT. WARNING!!! THIS ACTION CAN&apos;T BE
          REVERSED!
        </p>
        <section
          className={`flex align_center gap1rem gap1rem ${styles.paddingLeft}`}
        >
          <div className="padding05rem blue_background pointer flex align_center">
            <FaCheck className="font22 white-black " />
          </div>
          <p className="font14">Click to deactivate</p>
        </section>
      </section>
    </div>
  );
};

export default DeactivateAccount;
