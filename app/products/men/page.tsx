import { Header } from "@/app/components/header";

export default function Page() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center">
                <p>Home/<span className="font-medium">Products</span></p>
                <h3>PRODUCTS</h3>
            </div>
        </>
    )
}