import { Card } from "./components/card";
import { Categories } from "./components/categories";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Footer } from "./components/footer";
import { db } from "./service/prismaClient";
import Link from "next/link";

export default async function Home() {

  const product = await db.product.findMany();

  const product2 = await db.product.findMany({
    orderBy: {
      price: "desc"
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Categories />

      <Search />

      <div className="p-5 flex flex-col gap-3 my-4">
        <h1 className="text-5xl font-extrabold w-40">NEW COLLECTION</h1>
        <p className="w-20 font-medium">Summer 2024</p>
      </div>

      <div className="p-2 px-4 flex overflow-auto [&::-webkit-scrollbar]:hidden">
        {product.map(item => (
          <Link key={item.id} href={`/products/${item.id}`}>
            <Card key={item.id} product={item} />
          </Link>
        ))}
      </div>

      <div className="p-5 flex flex-row items-center gap-1 my-4 font-extrabold">
        <h1 className="text-5xl font-extrabold w-64">NEW THIS WEEK</h1>
        <span className="text-blue-900 text-2xl">(50)</span>
      </div>

      <div className="grid grid-cols-2 p-2 px-4 place-items-center">
        {product2.map(item => (
          <Link key={item.id} href={`/products/${item.id}`}>
            <Card key={item.id} product={item} />
          </Link>
        ))}
      </div>

      {/* <div className="p-2 px-4 flex overflow-auto [&::-webkit-scrollbar]:hidden">
        {Dress.map(item => (
          <Card key={item.id} product={item} />
        ))}
      </div>

      <div className="p-5 flex flex-row items-center gap-1 my-4 font-extrabold">
        <h1 className="text-5xl font-extrabold w-64">XIV COLECTIONS 23-24</h1>
      </div>

      <nav className="text-neutral-500">
        <Button variant={"link"} className="">(All)</Button>
        <Button variant={"link"} className="">Men</Button>
        <Button variant={"link"} className="">Women</Button>
        <Button variant={"link"} className="">Kids</Button>
      </nav>

      <div className="p-2 px-4 flex overflow-auto [&::-webkit-scrollbar]:hidden">
        {Short.map(item => (
          <Card key={item.id} product={item} />
        ))}
      </div>

      <div className="p-5">
        <button>
          <Link href={"/products"} className="flex flex-row gap-3 bg-neutral-300 rounded-none p-3 items-center font-semibold">
            Go To Shop
            <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
          </Link>
        </button>
      </div> */}

      <Footer />
    </div>
  );
}
