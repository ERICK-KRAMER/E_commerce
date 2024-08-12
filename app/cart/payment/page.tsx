import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";

export default function Page() {
    return (
        <section>
            <h1 className="text-lg font-bold p-4">SHIPPING</h1>

            <Card className="border-none">
                <CardContent className="space-y-2">
                    <h3 className="text-base font-bold uppercase">Address</h3>
                    <Input
                        placeholder="Cep"
                        className="rounded-none"
                    />
                    <Input
                        placeholder="Number"
                        className="rounded-none"
                    />
                    {/* expor dados do busca cep do client */}
                </CardContent>
            </Card>

            <Card className="border-none">
                <CardContent className="space-y-5">
                    <h3 className="text-base font-bold capitalize">ORDER SUMMARY</h3>
                    <div className="space-y-1 font-bold text-sm">
                        <span className="flex justify-between items-center">
                            <p>Subtotal</p>
                            <p>$180</p>
                        </span>
                        <span className="flex justify-between items-center">
                            <p>Subtotal</p>
                            <p>$180</p>
                        </span>
                    </div>

                    <hr className="w-full h-px bg-neutral-300 my-5"></hr>

                    <div className="flex justify-between items-center font-semibold">
                        <p>TOTAL <span className="text-neutral-400">(TAX INCL.)</span></p>
                        <p>$180</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Input
                            className="w-4 h-4"
                            type="checkbox"
                        />
                        <p className="text-neutral-500 font-medium">I agree to the Terms and Conditions</p>
                    </div>

                    <button className="bg-neutral-300 rounded-none p-4 h-full items-center font-semibold w-full mt-10">
                        <Link href={"/cart/payment"} className="w-full">
                            Shipping
                        </Link>
                    </button>

                </CardContent>
            </Card>

        </section>
    )
}