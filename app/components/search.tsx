import { Input } from "./ui/input";

const Search = () => {
    return (
        <>
            <div className="px-5 py-2">
                <Input
                    placeholder="Search"
                    className="bg-gray-300"
                />
            </div>
        </>
    )
}

export { Search };