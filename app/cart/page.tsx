import Image from "next/image";
import { CartItem } from "../components/cart-item";

export default function Page() {
    return (
        <section className="relative p-2">
            <h1 className="text-lg font-bold p-4">YOUR ORDER</h1>

            <span className="text-blue-800 text-base font-bold absolute top-3 right-3">(2)</span>

            <CartItem />

            <CartItem />

            <hr className="w-full h-px bg-neutral-300 my-10"></hr>

            <div className="space-y-1">
                <span className="flex justify-between">
                    <p className="text-sm font-bold">Subtotal</p>
                    <p className="text-sm font-bold">$180.00</p>
                </span>
                <span className="flex justify-between">
                    <p className="text-sm font-bold">Shipping</p>
                    <p className="text-sm text-neutral-400">Calculated at next step</p>
                </span>
            </div>

            <hr className="w-full h-px bg-neutral-300 my-5"></hr>

            <span className="flex justify-between">
                <p className="text-sm font-bold">Total</p>
                <p className="text-sm font-bold">$180.00</p>
            </span>

            <button className="flex flex-row gap-3 bg-neutral-300 rounded-none p-3 items-center font-semibold justify-between w-full my-10">
                Shipping
                <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
            </button>
        </section>
    )

}