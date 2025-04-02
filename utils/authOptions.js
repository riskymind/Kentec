import connectDB from "@/config/database";
import User from "@/models/user.model";

import GoogleProviderModule from "next-auth/providers/google";
const GoogleProvider = GoogleProviderModule.default;

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      if (!user) return false;
      try {
        await connectDB(); // Ensure DB is connected

        const adminEmail = ["thisiskelechi@gmail.com", "kentecglobalconcepts@gmail.com"]

        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          existingUser = await User.create({
            email: user.email,
            username: user.name.slice(0, 20),
            image: user.image || user.picture, // Use user.picture as fallback
            isAdmin: adminEmail.includes(user.email)
          });
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Sign-in error:", error);
        return false; // Prevent sign-in on error
      }
    },

    async jwt({ token }) {
      try {
        if (token.email) {
          const existingUser = await User.findOne({ email: token.email });

          if (existingUser) {
            token.id = existingUser._id;
            token.isAdmin = existingUser.isAdmin;
            token.email = existingUser.email;
          }
        }
        return token;
      } catch (error) {
        console.error("JWT error:", error);
        return token;
      }
    },

    // async jwt({ token, user }) {
    //   if (user) {
    //     token.id = user._id;
    //     token.email = user.email;
    //   }
    //   return token;
    // },

    async session({ session, token }) {
      if (token) {
        const user = await User.findOne({email: token.email})
        session.user = {
          email: token.email,
          image: token.picture,
          id: user._id.toString(),
          isAdmin: token.isAdmin, // Include admin status
        };
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

