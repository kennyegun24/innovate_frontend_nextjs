import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { websiteData } = await req.json();
  try {
    const response = await fetch(websiteData);
    // console.log(await response.text());
    const data = await response.text();

    return new NextResponse(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
