'use client';

import Image from "next/image";
import { Input } from "../components/ui/input";
import { useRouter } from "next/navigation";

export default function Page() {

    const { back } = useRouter();

    return (
        <div className="flex flex-col justify-center min-h-screen relative">

            <button
                className="py-7 px-5 absolute top-0"
                onClick={back}
            >
                <Image
                    className=" w-16"
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

                    <Input
                        className=" rounded-none border-neutral-300 outline-none"
                        placeholder="Password"
                        type="password"
                        required
                    />

                    <span className="text-sm text-blue-500 flex justify-end hover:underline cursor-pointer">Forget?</span>

                    <button className="flex flex-row gap-3 bg-gray-300 rounded-none p-3 items-center font-semibold justify-between">
                        Submit
                        <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
                    </button>

                    <button className="flex flex-row gap-3 bg-blue-600 rounded-none p-3 items-center font-semibold  justify-center text-white">
                        <Image
                            className=""
                            src={"/google.svg"}
                            alt="google_icon"
                            width={20}
                            height={20}
                        />
                        Enter with google account
                    </button>

                    <p className="text-sm text-center">Do not have an account? <span className="text-blue-500 hover:underline cursor-pointer">Click here!</span></p>

                </form>

            </div>
        </div>
    )
}