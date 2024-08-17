import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/app/service/prismaClient"
import { Adapter } from "next-auth/adapters"

const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        // Add your providers here, for example:
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ]
})

export { handler as GET, handler as POST }