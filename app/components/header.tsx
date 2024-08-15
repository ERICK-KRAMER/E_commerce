import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return (
        <header className="flex flex-row py-4 px-5 items-center justify-between">
            <Sheet>
                <SheetTrigger asChild>
                    <div className="flex-1 flex justify-start">
                        <Button variant={"link"} size={"icon"}>
                            <Image
                                src="/menu.svg"
                                alt="Menu"
                                width={30}
                                height={30}
                            />
                        </Button>
                    </div>
                </SheetTrigger>
                <SheetContent side={"left"} className="py-10 space-y-10 ">
                    <SheetHeader >
                        <span className="font-bold">
                            <Link href={"/sign-in"} className="flex items-center gap-3">
                                <Button variant={"link"} size={"icon"} className="bg-neutral-800 rounded-full flex justify-center items-center w-12 h-12">
                                    <Image
                                        src="/user.svg"
                                        alt="User"
                                        width={16}
                                        height={16}
                                    />
                                </Button>
                                Faça login
                            </Link>
                        </span>
                    </SheetHeader>
                    <nav className="flex flex-col gap-3">
                        <Button variant={"link"} className="text-lg font-bold">Home</Button>
                        <Button variant={"link"} className="text-lg font-bold">Collection</Button>
                        <Button variant={"link"} className="text-lg font-bold">Deals</Button>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex-1 flex justify-center">
                <Link href={"/"}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
            <div className="flex-1 flex justify-end items-center gap-1">
                <Button variant={"link"} size={"icon"} className="border-4 border-neutral-800 rounded-full flex justify-center items-center w-12 h-12">
                    <Link href={"/cart"}>
                        <Image
                            src="/shoppingBag.svg"
                            alt="Shopping Bag"
                            width={40}
                            height={40}
                        />
                    </Link>
                </Button>
            </div>
        </header>
    );
}

export { Header };
