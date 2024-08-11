import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-2 border-neutral-400 py-4 px-2 mt-auto flex flex-col justify-center items-center gap-4">
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
            <span className="font-extrabold">© 2023 Copyright Example</span>
        </footer>
    )
}

export { Footer };