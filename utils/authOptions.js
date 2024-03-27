import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          acces_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Invoked on successfull signin
    async signIn({ profile }) {
      //1. connect to db
      //2. check if user exists
      //3. if not, then add user to db
      //4. return true to allow sign in
    },
    //Modifies the session obj
    async sessionStorage({ session }) {
      //1. get user from db
      //2. assign the user id to the session
      //3. return session
    },
  },
};
