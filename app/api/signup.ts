import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/service/prismaClient";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const userAlreadyExist = await db.user.findFirst({
            where: { email: data?.email }
        });

        if (userAlreadyExist === null) {

            const user = await db.user.create({
                data: {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    address: data.address,
                    cep: data.cep
                }
            });

            return NextResponse.json({ message: `Usuario criado com sucesso! ${user}` }, { status: 201 });
        }

        return NextResponse.json({ message: "Usuario ja existe!" }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}
