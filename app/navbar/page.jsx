import { Button } from "@/components/ui/button";


const Header = () => {
    return (
        <div className="flex justify-center">
            <nav className="container flex justify-between mt-2 backdrop-blur-md bg-black/80 p-3 rounded-full">
                <div className="text-white flex items-center justify-center">
                    <h1 className="text-xl font-bold">iPhone 17 Pro</h1>
                </div>

                <div className=" flex gap-4">
                    <Button className="rounded-full">Explpre</Button>
                    <Button className="bg-[#0000FF] rounded-full">Buy </Button>
                </div>
            </nav>
        </div>
    )
}

export default Header;