import Image from "next/image";
import React from "react";
import { Col, Row, Slider } from "antd";
import { numberFormat } from "@/app/helpers/general";

const ProfileFriends = ({ data }) => {
  return (
    <Row gutter={[16, 16]} className="padding1rem">
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
              <h4>{friend.name}</h4>
              <p>Wordpress Developer</p>
            </div>
            <div className="flex align_center gap1rem">
              <div className="flex column gap05rem align_center">
                <p className="font12">FOLLOWERS</p>
                <p className="font14">{numberFormat(friend.followers_count)}</p>
              </div>
              <div
                className="flex column gap05rem align_center"
                style={{
                  borderLeft: "1px solid #fff",
                  borderRight: "1px solid #fff",
                  padding: "0 1rem",
                }}
              >
                <p className="font12">POSTS</p>
                <p className="font14">{numberFormat(friend.post_count)}</p>
              </div>
              <div className="flex column gap05rem align_center">
                <p className="font12">FOLLOWINGS</p>
                <p className="font14">{numberFormat(friend.following_count)}</p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProfileFriends;
