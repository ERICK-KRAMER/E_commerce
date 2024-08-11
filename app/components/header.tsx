import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <>
            <header className="flex flex-row py-4 px-5 items-center justify-between">
                <Button variant={"link"} size={"icon"}>
                    <Image
                        src="/menu.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                    />
                </Button>
                <div>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                    <Button variant={"link"} size={"icon"} className="border-4 border-black rounded-full flex justify-center items-center w-12 h-12">
                        <Image
                            src="/shoppingBag.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </Button>
                    <Button variant={"link"} size={"icon"} className="bg-black rounded-full flex justify-center items-center w-12 h-12">
                        <Image
                            src="/user.svg"
                            alt="Logo"
                            width={16}
                            height={16}
                        />
                    </Button>
                </div>
            </header>
        </>
    )
}

export { Header };