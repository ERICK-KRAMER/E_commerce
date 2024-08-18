import { db } from "@/app/service/prismaClient";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const user = await db.user.findFirst({ where: { email } });

        if (!user) {
            return new Response(JSON.stringify({
                error: "Email or Password incorrect!",
                status: 404
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (password !== user.password) {
            return new Response(JSON.stringify({
                error: "Email or Password incorrect!",
                status: 404
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // ... rest of the code ...
        return new Response(JSON.stringify({
            user: user,
            status: 200
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        if (error instanceof Error) {
            return new Response(JSON.stringify({
                message: "Error",
                error: error.message
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
}
