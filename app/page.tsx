import Image from "next/image";
import { Card } from "./components/card";
import { Categories } from "./components/categories";
import { Header } from "./components/header";
import { Search } from "./components/search";

export default function Home() {

  return (
    <>
      <Header />
      <Categories />
      <Search />
      <div className="p-5 flex flex-col gap-3 my-4">
        <h1 className="text-5xl font-bold w-40">NEW COLLECTION</h1>
        <p className="w-20 font-medium">Summer 2024</p>
      </div>
      <div className="p-2 px-4 flex overflow-auto [&::-webkit-scrollbar]:hidden">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="p-5">
        <button className="flex flex-row gap-3 bg-gray-300 rounded-none p-3 items-center font-semibold">
          Go To Shop
          <Image src={"/chevronRight.svg"} alt="chevron_icon" width={50} height={20} />
        </button>
      </div>
    </>
  );
}
