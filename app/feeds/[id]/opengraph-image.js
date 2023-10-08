import { posts } from "@/app/_mock/posts_mock";
import Image from "next/image";
import { ImageResponse } from "next/server";

export const size = {
  height: 450,
  width: 900,
};

export const contentType = "image/*";

export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    type: "post",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Seb", "Josh"],
  },
};

export default og = ({ params }) => {
  return new ImageResponse(
    (
      <div>
        <Image src={posts[params.id].image} alt="" />
      </div>
    )
  );
};
