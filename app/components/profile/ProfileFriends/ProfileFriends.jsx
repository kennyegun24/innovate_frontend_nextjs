import Image from "next/image";
import React from "react";
import { Col, Row, Slider } from "antd";
import { numberFormat } from "@/app/utils/general";
import styles from "./friends.module.css";

const ProfileFriends = ({ data }) => {
  return (
    <Row gutter={[16, 16]} className={styles.container}>
      {data.map((friend) => (
        <Col xs={12} sm={12} lg={8} key={friend.following_count}>
          <div
            className="background2 theme padding1rem flex column align_center
          gap15rem"
          >
            <Image
              src={friend.image}
              alt={friend.name}
              style={{
                maxHeight: "150px",
                width: "100%",
                borderRadius: "6px",
              }}
              className="object-cover"
            />
            <div className="flex column align_center">
              <h4 className={styles.friendName}>{friend.name}</h4>
              <p className={styles.friendProfession}>Wordpress Developer</p>
            </div>
            <div className={`flex align_center ${styles.friendStatDiv}`}>
              <div className="flex column gap05rem align_center">
                <p className={styles.friendStatsLabel}>FOLLOWERS</p>
                <p className={styles.friendStatNum}>
                  {numberFormat(friend.followers_count)}
                </p>
              </div>
              <div
                className={`flex column gap05rem align_center ${styles.vertical}`}
                style={{
                  borderLeft: "1px solid #fff",
                  borderRight: "1px solid #fff",
                }}
              >
                <p className={styles.friendStatsLabel}>POSTS</p>
                <p className={styles.friendStatNum}>
                  {numberFormat(friend.post_count)}
                </p>
              </div>
              <div className="flex column gap05rem align_center">
                <p className={styles.friendStatsLabel}>FOLLOWINGS</p>
                <p className={styles.friendStatNum}>
                  {numberFormat(friend.following_count)}
                </p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProfileFriends;
