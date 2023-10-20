// // /middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/feeds";
    const response = NextResponse.redirect(url);
    return response;
  }
}
