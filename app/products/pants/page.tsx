import { Card } from "@/app/components/card";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { Search } from "@/app/components/search";
import { db } from "@/app/service/prismaCliet";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Page() {

    const Pants = await db.product.findMany({
        where: {
            category_id: "00e44958-3fa4-4e31-82e7-ba098bd6e93d"
        }
    });


    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex justify-center items-center flex-col py-5">
                <p className="text-neutral-500">Home/<span className="text-black font-medium">Pants</span></p>
                <h3 className="font-bold">PRODUCTS</h3>
            </div>

            <Search />

            <div className="p-5">
                <h3 className="flex flex-row gap-2 text-lg font-extrabold items-center">Filters <ChevronRight /></h3>
            </div>

            {/* <Filters /> */}

            <div className="grid grid-cols-2 p-2 px-4 place-items-center">
                {Pants.map(item => (
                    <Link key={item.id} href={`/products/${item.id}`}>
                        <Card product={item} />
                    </Link>
                ))}
            </div>

            <Footer />
        </div>
    )
}