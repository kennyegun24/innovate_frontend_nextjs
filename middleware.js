export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/current_user_profile/:path*",
    "/settings/account/:path*",
    "/recommended_users",
    "/jobs/:path*",
    "/notifications",
    "/chat/:path*",
  ],
};
