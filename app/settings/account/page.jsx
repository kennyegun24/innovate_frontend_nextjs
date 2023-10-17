import Link from "next/link";
import React from "react";
import { BsLockFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import styles from "./styles.module.css";

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
    icon: BsLockFill,
  },
  {
    name: "Deactivate Account",
    text: "Deavtivate account... WARNING!!! ACTION CANNOT BE REVOKED IF DONE!!",
    link: "deactivate",
    icon: TiUserDelete,
  },
];
const Account = () => {
  return (
    <div>
      <div className="padding1rem flex column gap15rem">
        <h4>Your Account</h4>
        <p className="font12 opacity07">
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
            <link.icon className="font18" />
            <div>
              <p className="font14 fontW600">{link.name}</p>
              <p className="font12 opacity07">{link.text}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Account;
