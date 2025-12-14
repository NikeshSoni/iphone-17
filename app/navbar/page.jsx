import { Button } from "@/components/ui/button";


const Header = () => {
    return (
        <div className="mx-auto w-[90%] md-w-[80%]">
            <nav className="flex justify-between mt-1 backdrop-blur-md bg-black/80 p-2 rounded-full">
                <div className="text-white flex items-center justify-center">
                    <h1 className="text-sm md:text-xl font-bold">iPhone 17 Pro</h1>
                </div>

                <div className="flex gap-2 md:gap-4">
                    <Button className="rounded-full text-[0.8rem] md:text-lg">Explpre</Button>
                    <Button className="bg-[#0000FF] rounded-full text-[0.8rem] md:text-lg">Buy </Button>
                </div>
            </nav>
        </div>
    )
}

export default Header;