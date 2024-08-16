import { Card } from "@/app/components/card";
import { Filters } from "@/app/components/filters";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { Search } from "@/app/components/search";
import { db } from "@/app/service/prismaCliet";
import { ChevronRight } from "lucide-react";

export default async function Page() {

    const Short = await db.product.findMany({
        where: {
            category_id: "1e7e6080-110c-4725-98d9-56610243e66a"
        }
    });

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex justify-center items-center flex-col py-5">
                <p className="text-neutral-500">Home/<span className="text-black font-medium">Shorts</span></p>
                <h3 className="font-bold">PRODUCTS</h3>
            </div>

            <Search />

            <div className="p-5">
                <h3 className="flex flex-row gap-2 text-lg font-extrabold items-center">Filters <ChevronRight /></h3>
            </div>

            <Filters />

            <div className="grid grid-cols-2 p-2 px-4 place-items-center">
                {Short.map(item => (
                    <Card key={item.id} product={item} />
                ))}
            </div>

            <Footer />
        </div>
    )
}