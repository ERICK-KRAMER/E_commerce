'use client';

import Image from "next/image";
import { Input } from "../components/ui/input";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters").
        max(50, "Password must be at most 50 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Page() {

    const { data: session, status } = useSession();

    const router = useRouter();

    const { register, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (session) {
        // Redirecionar para outra página se o usuário já estiver logado
        router.push('/');
        return null;
    }

    const Onsubmit: SubmitHandler<LoginSchema> = (data: any) => {
        console.log(data);
    }

    console.log(session);

    return (
        <div className="flex flex-col justify-center min-h-screen relative">

            <button
                className="py-7 px-5 absolute top-0"
                onClick={() => router.back()}
            >
                <Image
                    className="w-16"
                    src={"/chevronLeft.svg"}
                    alt="Chevron-left"
                    width={40}
                    height={40}
                />
            </button>

            <div className="p-5 flex flex-col gap-2">
                <h1 className="font-extrabold text-3xl">Sign up</h1>

                <form
                    className="flex flex-col gap-2"
                    onSubmit={handleSubmit(Onsubmit)}
                >
                    <p className="text-sm font-bold">INFORMATION</p>

                    <Input
                        className="rounded-none border-neutral-300 outline-none"
                        placeholder="Email"
                        required
                        {...register("email")}
                    />

                    <div className="relative">
                        <Input
                            className="rounded-none border-neutral-300 outline-none"
                            placeholder="Password"
                            type={passwordVisible ? "text" : "password"}
                            required
                            {...register("password")}
                        />
                        {passwordVisible ?
                            <Eye className="absolute top-2 right-2 text-neutral-500 cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)} />
                            :
                            <EyeOff className="absolute top-2 right-2 text-neutral-500 cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)} />
                        }
                    </div>

                    <span className="text-sm text-blue-500 flex justify-end hover:underline cursor-pointer">Forget?</span>

                    <button className="flex flex-row gap-3 bg-neutral-300 rounded-none p-3 items-center font-semibold justify-between">
                        Submit
                        <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
                    </button>

                </form>
                <button
                    className="flex flex-row gap-3 bg-blue-600 rounded-none p-3 items-center font-semibold justify-center text-white"
                    onClick={() => signIn('google')}
                >
                    <Image
                        src={"/google.svg"}
                        alt="google_icon"
                        width={20}
                        height={20}
                    />
                    Enter with google account
                </button>

                <p className="text-sm text-center">Do not have an account? <Link href={"/sign-up"} className="text-blue-500 hover:underline cursor-pointer">Click here!</Link></p>

            </div>
        </div>
    );
}
