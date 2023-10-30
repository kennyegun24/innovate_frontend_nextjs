import Link from "next/link";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaLock, FaTrash, FaUser } from "react-icons/fa";
import styles from "./styles.module.css";
import Logout from "./Logout";

const links = [
  {
    name: "Account Information",
    text: "Check your account information",
    link: "information",
    icon: FaUser,
  },
  {
    name: "Change Password",
    text: "Secure your account by changing your account password anytime you want",
    link: "password_change",
    icon: FaLock,
  },
  {
    name: "Deactivate Account",
    text: "Deavtivate account... WARNING!!! ACTION CANNOT BE REVOKED IF DONE!!",
    link: "deactivate",
    icon: FaTrash,
  },
];
const AccountSettings = () => {
  return (
    <div>
      <div className="padding1rem flex column gap15rem">
        <h4 className={styles.header}>Your Account</h4>
        <p className={`opacity07 ${styles.headerText}`}>
          Change password, check account information, deactivate account
          (WARNING! CANNOT BE REVOKED, AS ALL USER DETAILS WILL CEASE TO EXIST
          IN OUR DATABASE)
        </p>
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          className={`linkBackgroundNone text_decoration_none text_color`}
          href={`/settings/account/${link.link}`}
        >
          <div
            className={`flex gap15rem align_center ${styles.mappedSettings}`}
          >
            <link.icon className={`${styles.icon}`} />
            <div className={styles.width85}>
              <p className={`fontW600 ${styles.linkName}`}>{link.name}</p>
              <p className={`opacity07 ${styles.linkText}`}>{link.text}</p>
            </div>
          </div>
        </Link>
      ))}
      <Logout />
    </div>
  );
};

export default AccountSettings;
