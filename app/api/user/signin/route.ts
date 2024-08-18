// pages/api/auth/signin.ts
import { db } from "@/app/service/prismaClient";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const user = await db.user.findFirst({ where: { email } });

        if (!user) {
            return Response.json({
                error: "Email or Password incorrect!",
                status: 404
            });
        }

        if (password != user.password) {
            return Response.json({
                error: "Email or Password incorrect!",
                status: 404
            });
        }
        // ... rest of the code ...
        return Response.json({
            user: user,
            status: 200
        });

    } catch (error) {
        if (error instanceof Error) {
            Response.json({
                message: "Error",
                error: error.message
            })
        }
    }
}
