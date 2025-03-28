import { authOptions } from "@/utils/authOptions";
import NextAuthModule from "next-auth"; 
const NextAuth = NextAuthModule.default;


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}