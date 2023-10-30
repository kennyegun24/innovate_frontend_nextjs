import { users } from "@/app/_mock/users";
import { ImageResponse } from "next/server";

export const size = {
  height: 250,
  width: 600,
};

export const contentType = "image/*";

// export const metadata = {

// };
export default async function og({ params }) {
  const data = users[params.id];
  return new ImageResponse(
    (
      <div style={{ display: "flex" }}>
        <img src={data.image} alt="alt" />
      </div>
    )
  );
}
