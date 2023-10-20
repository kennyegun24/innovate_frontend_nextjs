import { NextResponse } from "next/server";
import { unauthRailsRequest } from "@/app/utils/publicRequest";

export const POST = async (req, res) => {
  const { data } = await req.json();

  try {
    const sendRequestRails = await unauthRailsRequest.post(
      `authentication/login`,
      {
        email: data.email,
        password: data.password,
      }
    );
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
