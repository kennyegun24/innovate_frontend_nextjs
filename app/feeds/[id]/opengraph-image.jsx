import { posts } from "@/app/_mock/posts_mock";
import { numberFormat } from "@/app/utils/general";
import Image from "next/image";
import { ImageResponse } from "next/server";

export const size = {
  height: 450,
  width: 900,
};

export const contentType = "image/jpg";

// export const metadata = {

// };
const title = "I am ";
export default async function og({ params }) {
  const data = posts[params.id];
  return title, new ImageResponse(<img src={data.image} alt="alt" />);
}
