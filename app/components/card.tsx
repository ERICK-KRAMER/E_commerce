const Card = () => {
    return (
        <div className="w-48 h-58 p-4 space-y-2">
            <div className="w-40 h-44 border border-gray-300">
                {/* Image */}
            </div>
            <div className="flex flex-col">
                <small className="text-xs">Cotton T Shirt</small>
                <span className="flex flex-row px-px gap-3">
                    <p className="font-semibold text-sm truncate">Full Sleeve Zipper</p>
                    <p className="text-sm font-semibold">R$:199</p>
                </span>
            </div>
        </div>
    )
}

export { Card };