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
          const tokenExpiration = new Date();
          tokenExpiration.setHours(tokenExpiration.getHours() + 24);
          return {
            token: user.data.token,
            role: user.data.type,
            image: user.data.image,
            user_name: user.data.user_name,
            uid: user.data.uid,
            user_id: user.data.user_id,
            name: user.data.name,
            profession: user.data.profession,
            followers_count: user.data.followers_count,
            bio: user.data.bio,
            about: user.data.about,
            header: user.data.header,
            location: user.data.location,
            posts_count: user.data.posts_count,
            blogs_count: user.data.blogs_count,
            phoneNumber: user.data.phoneNumber,
            company: user.data.company,
            school: user.data.school,
            expires: tokenExpiration,
          };
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
            uid: credentials.uid,
          };
        } else {
          user = {
            user_name: credentials.user_name,
            password: credentials.password,
            email: credentials.email,
            uid: credentials.uid,
            name: credentials.name,
            uid: credentials.uid,
          };
        }

        try {
          const authResponse = await unauthRailsRequest.post(`authentication`, {
            user,
          });
          const res = await authResponse.data;
          const response = await res?.data;
          const tokenExpiration = new Date();
          tokenExpiration.setHours(tokenExpiration.getHours() + 24);
          return {
            token: response.token,
            role: response.type,
            image: response.image,
            user_name: response.user_name,
            uid: response.uid,
            user_id: response.user_id,
            name: response.name,
            profession: response.profession,
            followers_count: response.followers_count,
            bio: response.bio,
            about: response.about,
            header: response.header,
            location: response.location,
            posts_count: response.posts_count,
            blogs_count: response.blogs_count,
            phoneNumber: response.phoneNumber,
            company: response.company,
            school: response.school,
            expires: tokenExpiration,
          };
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
      user && (token = user);
      if (token?.expires && new Date() <= new Date(token.expires)) {
        return token;
      }
    },
    session: async ({ session, token }) => {
      session.user.token = token?.token;
      session.user.user_id = token?.user_id;
      session.user.image = token?.image;
      session.user.uid = token?.uid;
      session.user.name = token?.name;
      session.user.role = token?.role;
      session.user.user_name = token?.user_name;
      session.user.profession = token?.profession;
      session.user.followers_count = token?.followers_count;
      session.user.bio = token?.bio;
      session.user.about = token?.about;
      session.user.header = token?.header;
      session.user.location = token?.location;
      session.user.posts_count = token?.posts_count;
      session.user.blogs_count = token?.blogs_count;
      session.user.phoneNumber = token?.phoneNumber;
      session.user.company = token?.company;
      session.user.school = token?.school;
      session.expires = token?.expires;
      if (token?.expires && new Date() <= new Date(token?.expires)) {
        return session;
      }
    },
  },
});
export { handler as GET, handler as POST };
