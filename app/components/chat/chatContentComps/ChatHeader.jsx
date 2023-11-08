"use client";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import ChatHeaderActions from "./header/ChatHeaderActions";
import { db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getDetails } from "@/app/redux/unauth/otherUserDetalisSlice";
import { useDispatch } from "react-redux";
const ChatHeader = ({ uid }) => {
  const status = {
    // online: true
    online: false,
  };
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
          setUserData(docSnap.data());
          dispatch(getDetails(docSnap.data()));
          setFetching(false);
        } else {
          return {};
        }
      } catch (error) {}
    };
    fetchData();
    /* eslint-disable */
  }, []);
  return (
    <div className="flex justify_between padding05rem">
      <div className="gap05rem flex">
        <Image
          src={userData?.userImage}
          alt=""
          height={40}
          width={40}
          className="roundedImage object-cover"
        />
        <div className="flex column gap02rem">
          <p className="font14 fontW600">{userData?.displayName}</p>
        </div>
      </div>
      <ChatHeaderActions />
    </div>
  );
};

export default memo(ChatHeader);
