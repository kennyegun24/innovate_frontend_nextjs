import { unauthRailsRequest } from "@/app/utils/publicRequest";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        try {
          const authResponse = await unauthRailsRequest.post(
            `authentication/login`,
            {
              password: credentials.password,
              email: credentials.email,
            }
          );
          const user = await authResponse.data;
          return user?.data;
        } catch (err) {
          throw Error(
            err.response?.data?.message
              ? err.response.data.message
              : "Something went wrong"
          );
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
});
export { handler as GET, handler as POST };
