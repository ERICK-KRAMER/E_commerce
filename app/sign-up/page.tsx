"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { EyeOff, Eye } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const createUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(2),
    number: z.number().int(),
    cep: z.string().min(2)
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export default function Page() {
    const router = useRouter();

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserSchema>({
        resolver: zodResolver(createUserSchema),
    });

    const Onsubmit: SubmitHandler<CreateUserSchema> = async (data) => {
        console.log(data);

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            router.push("/login");
        } else {
            const errorData = await response.json();
            console.error("Signup error:", errorData);

        }
    }

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

            <div className="p-5 flex flex-col gap-10">
                <h1 className="font-extrabold text-3xl">Sign up</h1>

                <form className=" flex flex-col gap-2" onSubmit={handleSubmit(Onsubmit)}>
                    <p className="text-sm font-bold">INFORMATION</p>

                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Email"
                        required
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className="relative">
                        <Input
                            className=" rounded-none border-neutral-300 outline-none"
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
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>

                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Name"
                        required
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <p className="text-sm font-bold">SHIPPING ADDRESS</p>

                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Cep"
                        required
                        {...register("cep")}
                    />
                    {errors.cep && <p className="text-red-500">{errors.cep.message}</p>}
                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Number"
                        type="number"
                        required
                        {...register("number", { valueAsNumber: true })}
                    />
                    {errors.number && <p className="text-red-500">{errors.number.message}</p>}

                    <button className="flex flex-row gap-3 bg-neutral-300 rounded-none p-3 items-center font-semibold justify-between my-4">
                        Submit
                        <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
                    </button>

                </form>
            </div>
        </div>
    );
}
