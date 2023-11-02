"use client";
import React from "react";
import ProfileHeader from "@/app/components/profile/profileHeader/ProfileHeader";
import { usePathname } from "next/navigation";
import ProfileHeaderAnimation from "@/app/components/animaate/ProfileHeaderAnimation";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { getDetails } from "@/app/redux/unauth/otherUserDetalisSlice";

const Header = ({ id }) => {
  const dispatch = useDispatch();
  const path = usePathname();
  const userName = path.split("/")[2];
  const editProfile = `/user/${userName}/${id}`;
  const feeds = `/user/${userName}/${id}`;
  const about = `/user/${userName}/${id}/about`;
  const friends = `/user/${userName}/${id}/friends`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/v1/unauth/user_details/${id}`,
    fetcher,
    {
      refreshInterval: null,
      // errorRetryInterval: null,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryCount: 0,
      revalidateOnMount: 10000,
    }
  );
  const details = data?.data || {};
  if (data) {
    dispatch(getDetails(data.data));
  }

  return (
    <div>
      {isLoading ? (
        <>
          <ProfileHeaderAnimation />
        </>
      ) : (
        <ProfileHeader
          feeds={feeds}
          about={about}
          friends={friends}
          editProfile={editProfile}
          data={details}
          button={{
            presence: true,
            border: "blue_border",
            background_color: "blue_background",
            color: "white",
          }}
        />
      )}
    </div>
  );
};

export default Header;
