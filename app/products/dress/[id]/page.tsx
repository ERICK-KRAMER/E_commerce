"use client";

import { Button } from "@/app/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {

    const { back } = useRouter();

    return (
        <div className="">
            <header className="p-5 flex justify-center items-center">

                <button
                    className=""
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

                <div className="flex-1 flex justify-end items-center gap-1">
                    <Button variant={"link"} size={"icon"} className="border-4 border-black rounded-full flex justify-center items-center w-12 h-12">
                        <Image
                            src="/shoppingBag.svg"
                            alt="Shopping Bag"
                            width={40}
                            height={40}
                        />
                    </Button>
                    <Button variant={"link"} size={"icon"} className="bg-black rounded-full flex justify-center items-center w-12 h-12">
                        <Link href={"/sign-in"}>
                            <Image
                                src="/user.svg"
                                alt="User"
                                width={16}
                                height={16}
                            />
                        </Link>
                    </Button>
                </div>
            </header>

            <div>
                <Image
                    className="bg-emerald-200"
                    src={""}
                    alt=""
                    width={500}
                    height={600}
                />
            </div>

            <div className="flex flex-col p-4">
                <span className="flex justify-between">
                    <h3 className="font-extrabold">ABSTRACT PRINT SHIRT</h3>
                    <Heart />
                </span>
                <span className="flex justify-between py-2">
                    <p className="text-neutral-500">MRP incl. of all taxes</p>
                    <p className=" font-bold">$99</p>
                </span>
                <p className="text-sm font-bold pt-4 w-80">Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.</p>
            </div>

            <div className="flex flex-col px-5 pb-5">
                <h3 className="text-neutral-500">COLOR</h3>
                <div className="flex gap-1">
                    <span className="cursor-pointer bg-neutral-300 p-5"></span>
                    <span className="cursor-pointer bg-neutral-400 p-5"></span>
                    <span className="cursor-pointer bg-emerald-200 p-5"></span>
                    <span className="cursor-pointer bg-white p-5"></span>
                    <span className="cursor-pointer bg-blue-200 p-5"></span>

                </div>
            </div>

            <div className="flex flex-col px-5 pb-5">
                <h3 className="text-neutral-500">COLOR</h3>
                <div className="flex gap-1">
                    <span className="border-2 border-neutral-400 w-12 h-12 flex justify-center items-center cursor-pointer">XS</span>
                    <span className="border-2 border-neutral-400 w-12 h-12 flex justify-center items-center cursor-pointer">S</span>
                    <span className="border-2 border-neutral-400 w-12 h-12 flex justify-center items-center cursor-pointer">M</span>
                    <span className="border-2 border-neutral-400 w-12 h-12 flex justify-center items-center cursor-pointer">L</span>
                    <span className="border-2 border-neutral-400 w-12 h-12 flex justify-center items-center cursor-pointer">XL</span>
                    <span className="border-2 border-neutral-400 w-12 h-12 flex justify-center items-center cursor-pointer">2X</span>
                </div>
            </div>

            <button className="flex bg-neutral-300 rounded-none p-4 items-center font-semibold justify-center w-full ">
                ADD
            </button>

        </div>
    )
}