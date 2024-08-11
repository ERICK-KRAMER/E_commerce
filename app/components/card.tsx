const Card = () => {
    return (
        <div className="w-58 h-58 p-2 space-y-1">
            <div className="w-44 h-48 border border-gray-300">
                {/* Image */}
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