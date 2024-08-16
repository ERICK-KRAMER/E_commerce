import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItem {
    product: Product;
}

const Card = ({ product }: ProductItem) => {
    return (
        <div className="w-48 h-58 p-2 space-y-1">
            <div className="w-44 h-52 border border-gray-300">
                {/* Image */}
                <Image
                    src={product?.image[0]}
                    alt={product?.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col">
                <small className="text-xs">{product?.description}</small>
                <span className="flex flex-row justify-between">
                    <p className="font-semibold text-sm truncate">{product?.name}</p>
                    <p className="text-sm font-semibold">$ {Number(product?.price)}</p>
                </span>
            </div>
        </div>
    )
}

export { Card };