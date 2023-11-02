"use client";
import ProfileExperience from "@/app/components/profile/profileAbout/ProfileExperience";
import React from "react";
import ProfileAnimation from "@/app/components/animaate/ProfileAnimation";
import useSWR from "swr";
import Error from "@/app/components/profile/error/Error";
import EmptyComponent from "@/app/components/profile/error/EmptyComponent";
const OtherUserExperience = ({ params }) => {
  const { id } = params;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/v1/user/${id}/experience`,
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
  const experience = data?.data || [];

  if (isLoading) return <ProfileAnimation />;
  if (error) return <Error />;

  return (
    <>
      {experience.length > 0 ? (
        <ProfileExperience data={experience} />
      ) : (
        <EmptyComponent text={"User has no experience set"} />
      )}
    </>
  );
};

export default OtherUserExperience;
