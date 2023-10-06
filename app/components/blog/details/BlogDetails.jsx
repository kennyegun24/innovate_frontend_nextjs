import Image from "next/image";
// import image from "public/asset1.jpg";
import image from "public/twitter.png";
import { FaUser } from "react-icons/fa";
import { CalendarFilled, CommentOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { numberFormat, readTime, wordCount } from "@/app/helpers/general";
import styles from "./styles.module.css";
import { BiConversation, BiMicrophone } from "react-icons/bi";
import { blogPost } from "@/app/_mock/blog_post";
import { wrapLinksWithHeaderTag } from "./helper";
import BlogUserCard from "./BlogUserCard";

const BlogDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <BlogUserCard />
      </div>
      <div className={`${styles.blogCard} background2 flex gap1rem column`}>
        <Image src={image} alt="" className={`object-cover ${styles.image}`} />

        <div
          className="flex column gap2rem white-space padding05rem"
          style={{ textAlign: "justify" }}
        >
          <div className="flex column gap1rem">
            <Button
              style={{
                background: "#fc516d",
                color: "#fff",
                width: "fit-content",
              }}
            >
              Food Hobit
            </Button>
            <h3 className="font16">{blogPost.title}</h3>
            <div className="flex gap05rem wrap">
              <div className="flex gap05rem column">
                <p className={`${styles.labels}  flex gap05rem align_center`}>
                  <FaUser className="" />
                  {blogPost.author_name}
                </p>

                <p className={`${styles.labels}  flex gap05rem align_center`}>
                  <CalendarFilled className="" />
                  03 April 2023
                </p>
              </div>
              <div className="flex gap05rem column">
                <p className={`${styles.labels}  flex gap05rem align_center`}>
                  <BiMicrophone className="" />
                  {readTime(blogPost.text)}
                </p>
                <p className={`${styles.labels}  flex gap05rem align_center`}>
                  <BiConversation className={`${styles.labels} `} />
                  {wordCount(blogPost.text)} words
                </p>
              </div>
              <p className={`${styles.labels}  flex gap05rem align_center`}>
                <CommentOutlined className="" />
                {numberFormat(blogPost.comments_count)} Comments
              </p>
            </div>
          </div>
          <p
            className={`font14 ${styles.text}`}
            dangerouslySetInnerHTML={wrapLinksWithHeaderTag(blogPost.text)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
