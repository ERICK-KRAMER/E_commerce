import { Header } from "@/app/components/header";
import { Search } from "@/app/components/search";
import { ChevronRight } from "lucide-react";

export default function Page() {
    return (
        <>
            <Header />

            <div className="flex justify-center items-center flex-col py-5">
                <p className="text-neutral-500">Home/<span className="text-black font-medium">Products</span></p>
                <h3 className="font-bold">PRODUCTS</h3>
            </div>

            <Search />

            <div className="p-5">
                <h3 className="flex flex-row gap-2 text-lg font-extrabold items-center">Filters <ChevronRight /></h3>
            </div>

        </>
    )
}