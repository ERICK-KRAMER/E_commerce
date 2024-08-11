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
      <div className="p-4 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">NEW COLLECTION</h1>
        <p className="w-20 font-medium">Summer 2024</p>
      </div>
      <Card />
    </>
  );
}
