import { filters } from "../constants/filtres";
import { Button } from "./ui/button";

const Filters = () => {
    return (
        <nav className="overflow-auto [&::-webkit-scrollbar]:hidden px-4">
            <div className="flex flex-row space-x-2">
                {filters.reduce((acc, item, index) => {
                    // Agrupar os itens em pares
                    if (index % 2 === 0) {
                        acc.push([item, filters[index + 1]]);
                    }
                    return acc;
                }, []).map((pair, index) => (
                    <div key={index} className="space-y-1">
                        {pair.map(item => item && (
                            <div key={item.id} className="w-32 h-9 border-2 border-solid border-neutral-500 text-neutral-500">
                                <Button variant={"link"} className="w-full rounded-none h-full">{item.name}</Button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export { Filters };