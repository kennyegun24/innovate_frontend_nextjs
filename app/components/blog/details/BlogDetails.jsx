import styles from "./styles.module.css";

import BlogUserCard from "./BlogUserCard";
import BlogPost from "./BlogPost";
import OtherBlogs from "./OtherBlogs";

const BlogDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <BlogUserCard />
      </div>
      <div className={`${styles.blogCard} flex gap2rem column`}>
        <BlogPost />
        <div className="width100">
          <OtherBlogs />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
