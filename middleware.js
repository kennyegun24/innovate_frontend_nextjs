// /middleware.js
import { NextResponse } from "next/server";
import { store } from "./app/redux/store";

export function middleware(request) {
  const authToken = store.getState().user.currentUser;
  const path = "/current_user_profile";

  if (!authToken && request.nextUrl.pathname.startsWith(path)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    const response = NextResponse.redirect(url);
    return response;
  }

  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/feeds";
    const response = NextResponse.redirect(url);
    return response;
  }
}
