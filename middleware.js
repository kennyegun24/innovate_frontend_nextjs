// /middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Extract the pathname from the request URL
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Store the pathname in a custom header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", pathname);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
