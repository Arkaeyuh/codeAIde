import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // point to wherever you placed auth.ts

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
