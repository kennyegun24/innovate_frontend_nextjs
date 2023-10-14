import { NextResponse } from "next/server";
import { unauthRailsRequest } from "@/app/utils/publicRequest";

export const POST = async (req, res) => {
  const { user } = await req.json();

  try {
    const sendRequestRails = await unauthRailsRequest.post(`authentication`, {
      user,
    });

    return new NextResponse(sendRequestRails.data.data, {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.response.data.message, {
      status: error.response.status,
    });
  }
};
