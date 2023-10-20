import { unauthRailsRequest } from "@/app/utils/publicRequest";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        const authResponse = await unauthRailsRequest.post(
          `authentication/login`,
          {
            // user: {
            // name: credentials.name,
            password: credentials.password,
            email: credentials.email,
            // user_name: credentials.user_name,
            // },
          }
        );
        console.log(credentials);
        const user = await authResponse.data;
        console.log(user?.data);
        return user?.data;
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
