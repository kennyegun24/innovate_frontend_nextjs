import { posts } from "@/app/_mock/posts_mock";
import { numberFormat } from "@/app/utils/general";
import Image from "next/image";
import { ImageResponse } from "next/server";

export const size = {
  height: 450,
  width: 900,
};

export const contentType = "image/jpg";

export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    type: "post",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Seb", "Josh"],
  },
};

export default async function og({ params }) {
  const data = posts[params.id];
  return new ImageResponse(<img src={data.image} alt="" />);
}
