import { db } from "@/app/service/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Request body:", body);
        const { name, email, password, number, cep } = body;

        const userAlreadyExist = await db.user.findFirst({
            where: { email }
        });

        if (userAlreadyExist) {
            return NextResponse.json({
                message: "User already exists"
            }, { status: 409 });
        }

        const newUser = await db.user.create({
            data: { name, email, password, number, cep }
        });

        return NextResponse.json({
            message: "User created successfully",
            user: newUser
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        if (error instanceof Error) {
            return NextResponse.json({
                message: "Error",
                error: error.message
            }, { status: 500 });
        }
        return NextResponse.json({
            message: "Unknown error"
        }, { status: 500 });
    }
}
