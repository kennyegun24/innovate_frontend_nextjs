"use client";
import ProfileEducation from "@/app/components/profile/profileAbout/ProfileEducation";
import React from "react";
import ProfileAnimation from "@/app/components/animaate/ProfileAnimation";
import useSWR from "swr";
import Error from "@/app/components/profile/error/Error";
import EmptyComponent from "@/app/components/profile/error/EmptyComponent";
const OtherUserEducation = ({ params }) => {
  const { id } = params;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://192.168.252.193:4000/api/v1/user/${id}/education`,
    fetcher,
    {
      refreshInterval: null,
      // errorRetryInterval: null,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryCount: 0,
    }
  );

  const education = data?.data || [];

  if (isLoading) return <ProfileAnimation />;
  if (error) return <Error />;
  return (
    <>
      {experience.length > 0 ? (
        <ProfileEducation data={education} />
      ) : (
        <EmptyComponent text={"User has no education set"} />
      )}
    </>
  );
};

export default OtherUserEducation;
