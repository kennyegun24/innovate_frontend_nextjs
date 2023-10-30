"use client";
import ProfileFeedsOverview from "@/app/components/profile/profileFeeds/ProfileFeedsOverview";
import styles from "./profileFeeds.module.css";
import ProfilePosts from "./ProfilePosts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUnauthOtherUserDetails } from "@/app/redux/unauth/otherUserDetalisSlice";

const CurrentUserProfilePostFeeds = ({ params }) => {
  const { details } = useSelector((state) => state.unauthUserDetails);
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUnauthOtherUserDetails(id));
  }, [id, dispatch]);

  return (
    <div className={styles.container}>
      <section className={styles.overViewContainer}>
        <ProfileFeedsOverview data={details} />
      </section>
      <ProfilePosts id={id} />
    </div>
  );
};

export default CurrentUserProfilePostFeeds;
