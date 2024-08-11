import { Button } from "./ui/button";


const Categories = () => {

    let categories = ["MEN", "WOMEN", "KIDS"];

    return (
        <>
            <nav className="flex justify-center items-center py-4 gap-4 text-3xl font-semibold">
                {categories.map((item, index) => (
                    <Button key={index} variant={"link"} className="w-fit text-lg font-semibold">{item}</Button>
                ))}
            </nav>
        </>
    )
}

export { Categories };