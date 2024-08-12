import Image from "next/image";

const Card = () => {
    return (
        <div className="w-48 h-58 p-2 space-y-1">
            <div className="w-44 h-52 border border-gray-300">
                {/* Image */}
                <Image
                    src=""
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col">
                <small className="text-xs">Cotton T Shirt</small>
                <span className="flex flex-row justify-between">
                    <p className="font-semibold text-sm truncate">Full Sleeve Zipper</p>
                    <p className="text-sm font-semibold">$ 199</p>
                </span>
            </div>
        </div>
    )
}

export { Card };