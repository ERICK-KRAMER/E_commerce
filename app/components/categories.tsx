import Link from "next/link";
import { Button } from "./ui/button";
import { categories } from "../constants/categories";

const Categories = () => {

    return (
        <>
            <nav className="flex justify-center items-center py-4 gap-4 text-3xl font-semibold">
                {categories.map((item) => (
                    <Button key={item.id} variant={"link"} className="w-fit text-lg font-semibold">
                        <Link href={item.url}>{item.name}</Link>
                    </Button>
                ))}
            </nav>
        </>
    )
}

export { Categories };