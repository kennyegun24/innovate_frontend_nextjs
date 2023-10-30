import { posts } from "@/app/_mock/posts_mock";
import { ImageResponse } from "next/server";

export const size = {
  height: 450,
  width: 900,
};

export const contentType = "image/jpg";

// export const metadata = {

// };
export default async function og({ params }) {
  const data = posts[params.id];
  return new ImageResponse(
    (
      <div style={{ display: "flex" }}>
        <img src={data.image} alt="alt" />
      </div>
    )
  );
}
