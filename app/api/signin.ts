// pages/api/auth/signin.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "../service/prismaClient";


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const userAlreadyExist = await db.user.findFirst({
            where: { email: data?.email }
        });

        if (userAlreadyExist) {
            return NextResponse.json({ Message: "OK" });
        }

        return NextResponse.json({ message: "User does not exist" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}