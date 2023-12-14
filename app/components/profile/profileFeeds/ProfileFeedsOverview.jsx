import React from "react";
import styles from "./PostFeedOverview.module.css";

const ProfileFeedsOverview = ({ data }) => {
  return (
    <section className={`${styles.container} background2 theme`}>
      {data?.school && (
        <>
          <div className={styles.listDiv}>
            <h4 className="font12">Studied at</h4>
            <p className="font12">{data?.school}</p>
          </div>
          <hr />
        </>
      )}
      {data?.company && (
        <>
          <div className={styles.listDiv}>
            <h4 className="font12">Current work place</h4>
            <p className="font12">{data?.company}</p>
          </div>
          <hr />
        </>
      )}
      {data?.location && (
        <>
          <div className={styles.listDiv}>
            <h4 className="font12">Lives in</h4>
            <p className="font12">{data?.location}</p>
          </div>
          <hr />
        </>
      )}
      {data?.profession && (
        <>
          <div className={styles.listDiv}>
            <h4 className="font12">Profession</h4>
            <p className="font12">{data?.profession}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default ProfileFeedsOverview;
