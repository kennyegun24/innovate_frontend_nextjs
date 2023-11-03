"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import { registerAuthentication } from "@/app/utils/api_requests/auth";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import imagePicker from "public/image_picker32.png";
import { loginFailure } from "../redux/user_auth/userReducer";

const Registration = () => {
  const [userData, setUserData] = useState(null);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { detailsError } = useSelector((state) => state.user);
  const handleInput = (e) => {
    if (e.target.name === "name") {
      let value = e.target.value;
      let name = value.charAt(0).toUpperCase() + value.substring(1);
      setUserData((prev) => ({ ...prev, [e.target.name]: name }));
    } else {
      setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const onSub = async (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    try {
      await registerAuthentication(
        {
          data: userData,
          file,
          id,
        },
        dispatch
      );
    } catch (error) {
      throw Error(error);
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
          <div className="flex align_center column">
            <h3>CREATE ACCOUNT</h3>
            <h5>Create your own personal account</h5>
          </div>

          <form onChange={(e) => handleInput(e)} onSubmit={onSub}>
            <input name="user_name" placeholder="Username..." />
            <input name="name" placeholder="Name..." value={userData?.name} />
            <input name="email" placeholder="Email..." />
            <input name="password" type="password" placeholder="Password..." />
            <label
              className=" flex align_center gap05rem"
              htmlFor="imageSelector"
            >
              <Image src={imagePicker} alt="select image" />
              <p className="font12">Select profile picture</p>
            </label>
            <input
              hidden
              style={{ padding: "initial" }}
              type="file"
              name="image"
              onChange={(e) => setFile(e.target.files[0])}
              id="imageSelector"
            />
            <div className="flex column gap05rem">
              <button>Register</button>
              {detailsError &&
                setTimeout(() => {
                  dispatch(loginFailure(false));
                }, 2000) && (
                  <span className="red font14 fontW600 textCenter">
                    {detailsError}
                  </span>
                )}
            </div>

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
