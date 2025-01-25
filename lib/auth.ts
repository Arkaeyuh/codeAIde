import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// This is a minimal credentials approach with no real DB check:
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 1) In a real app, you'd query your database to verify the user
        // 2) If valid, return the user object
        // 3) If invalid, return null

        // Minimal example:
        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "password123"
        ) {
          // Return any user object
          return {
            id: "1",
            name: "Test User",
            email: "test@example.com",
          };
        }
        // Return null if the user credentials are invalid
        return null;
      },
    }),
  ],
  // This is required for encrypting user tokens and sessions
  secret: process.env.NEXTAUTH_SECRET, 

  // If you're storing sessions in JWT (default), you can define settings here
  session: {
    strategy: "jwt",
  },

  // Configure callbacks for customizing session or JWT if needed
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as any;
      }
      return session;
    },
  },
};