"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { EyeOff, Eye } from "lucide-react";

export default function Page() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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

                <form className=" flex flex-col gap-2">
                    <p className="text-sm font-bold">INFORMATION</p>

                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Email"
                        required
                    />

                    <div className="relative">
                        <Input
                            className=" rounded-none border-neutral-300 outline-none"
                            placeholder="Password"
                            type={passwordVisible ? "text" : "password"}
                            required
                        />
                        {passwordVisible ?
                            <Eye className="absolute top-2 right-2 text-neutral-500 cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)} />
                            :
                            <EyeOff className="absolute top-2 right-2 text-neutral-500 cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)} />
                        }
                    </div>

                    <p className="text-sm font-bold">SHIPPING ADDRESS</p>

                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="First Name"
                        required
                    />
                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Country"
                        required
                    />
                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="State/Region"
                        required
                    />
                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Address"
                        required
                    />
                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="City"
                        required
                    />

                    <button className="flex flex-row gap-3 bg-neutral-300 rounded-none p-3 items-center font-semibold justify-between my-4">
                        Submit
                        <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
                    </button>

                </form>
            </div>

        </div>
    )
}
