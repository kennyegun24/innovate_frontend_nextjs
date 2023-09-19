import React from "react";
import styles from "./PostFeedOverview.module.css";

const ProfileFeedsOverview = ({ data }) => {
  return (
    <section className={`${styles.container} background2 theme`}>
      <div className={styles.listDiv}>
        <h4 className="font12">Studied at</h4>
        <p className="font12">{data.studiedAt}</p>
      </div>
      <hr />
      <div className={styles.listDiv}>
        <h4 className="font12">From</h4>
        <p className="font12">{data.from}</p>
      </div>
      <hr />
      <div className={styles.listDiv}>
        <h4 className="font12">Lives in</h4>
        <p className="font12">{data.location}</p>
      </div>
    </section>
  );
};

export default ProfileFeedsOverview;
