import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex flex-row py-4 px-5 items-center justify-between">
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
                <Button variant={"link"} size={"icon"} className="border-4 border-black rounded-full flex justify-center items-center w-12 h-12">
                    <Link href={"/cart"}>
                        <Image
                            src="/shoppingBag.svg"
                            alt="Shopping Bag"
                            width={40}
                            height={40}
                        />
                    </Link>
                </Button>
                <Button variant={"link"} size={"icon"} className="bg-black rounded-full flex justify-center items-center w-12 h-12">
                    <Link href={"/sign-in"}>
                        <Image
                            src="/user.svg"
                            alt="User"
                            width={16}
                            height={16}
                        />
                    </Link>
                </Button>
            </div>
        </header>
    );
}

export { Header };
