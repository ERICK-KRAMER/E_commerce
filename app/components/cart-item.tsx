import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const CartItem = () => {
    return (
        <>
            <Card>
                <CardContent className="flex flex-row p-3 w-full bg-green-400">

                    <Image
                        className="bg-red-500 w-40 h-48"
                        src={""}
                        alt=""
                        width={100}
                        height={100}
                    />

                    <div className="p-4 flex flex-col justify-between py-7 w-full">
                        <div className="flex flex-row justify-between w-full">
                            <div className="space-y-1">
                                <h1 className="text-sm font-bold">Basic Heavy T-shirt</h1>
                                <p className="text-sm text-neutral-500 font-medium">
                                    Black/L
                                </p>
                            </div>
                            <p className=" font-bold underline text-sm">Change</p>
                        </div>
                        <span className="flex justify-between">
                            <p className="text-blue-800 font-bold text-sm">(1)</p>
                            <p className="font-extrabold text-sm">$ 99</p>
                        </span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export { CartItem };