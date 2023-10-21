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
    signUp: "/register",
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
    CredentialsProvider({
      id: "signup",
      name: "Signup",
      async authorize(credentials) {
        let user;
        if (credentials.image) {
          user = {
            user_name: credentials.user_name,
            password: credentials.password,
            email: credentials.email,
            work: credentials.work,
            name: credentials.name,
            image: credentials.image,
          };
        } else {
          user = {
            user_name: credentials.user_name,
            password: credentials.password,
            email: credentials.email,
            work: credentials.work,
            name: credentials.name,
          };
        }

        try {
          const authResponse = await unauthRailsRequest.post(`authentication`, {
            user,
          });
          const res = await authResponse.data;
          console.log(res.data);
          return res?.data;
        } catch (err) {
          console.log(err.response.data.message[0]);
          throw Error(
            err.response?.data?.message
              ? err.response.data.message[0]
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
