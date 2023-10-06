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

const BlogDetails = () => {
  return (
    <div>
      <div className="background2 padding1rem flex gap1rem column">
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
            <h3 className="font16">
              A Discount Toner Cartridge is Better Than Ever
            </h3>
            <div className="flex gap05rem align_center">
              <FaUser className="font10" />
              <p className="font12">Mark Wiens</p>
              <CalendarFilled className="font12" />
              <p className="font12">03 April 2023</p>
              <CommentOutlined className="font12" />
              <p className="font12">{numberFormat(3284)} Comments</p>
              <BiMicrophone className="font12" />
              <p className="font12">{readTime(blogPost.text)}</p>
              <BiConversation className="font12" />
              <p className="font12">{wordCount(blogPost.text)} words</p>
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
