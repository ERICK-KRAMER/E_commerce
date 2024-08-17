import { NextRequest, NextResponse } from "next/server";
import { db } from "../service/prismaClient";

export async function SIGNIN(request: NextRequest) {
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

export async function SIGNUP(requerst: NextRequest) {
    try {
        const data = await requerst.json();

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