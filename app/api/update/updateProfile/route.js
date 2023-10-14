import { authRailsRequest } from "@/app/utils/publicRequest";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { user_detail } = await req.json();
  try {
    const sendRailsRequest = await authRailsRequest.put("user/update_profile", {
      user_detail,
    });
    return new NextResponse(sendRailsRequest.data?.message, {
      status: sendRailsRequest.data?.status,
    });
  } catch (error) {
    return new NextResponse(error.response.data.message, {
      status: error.response.status,
    });
  }
};
