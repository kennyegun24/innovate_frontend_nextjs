import { NextResponse } from "next/server";
import { unauthRailsRequest } from "@/app/utils/publicRequest";

export const POST = async (req, res) => {
  const { user } = await req.json();

  try {
    const sendRequestRails = await unauthRailsRequest.post(`authentication`, {
      user,
    });
    console.log(sendRequestRails.data.message);
    return new NextResponse(
      JSON.stringify({
        data: sendRequestRails.data.data,
        message: sendRequestRails.data.message,
        status: 201,
      })
    );
  } catch (error) {
    return new NextResponse(error.response.data.message, {
      status: error.response.status,
    });
  }
};
