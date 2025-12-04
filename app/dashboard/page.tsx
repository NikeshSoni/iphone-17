import { Button } from '@/components/ui/button';
import Image from 'next/image';


const Dashboard = () => {
  return (
    <div className='text-white'>
    <div className="text-center bg-[#1d1d1f] py-3 lg:py-4 px-4 text-xs sm:text-sm lg:text-base">
        Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. 
        Plus up to 6 months of No Cost EMI.‡ Buy
    </div>
    
    <div className="relative w-full max-w-7xl mx-auto mt-2 lg:mt-3">
        <div className="aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] relative mb-0 sm:mb-20 md:mb-24 lg:mb-0">
            <Image 
                src="/hero__bdntboqignj6_xlarge_2x.jpg"  
                alt="iPhone 17 Pro" 
                fill
                className="object-contain hidden  md:block"
                priority
            />

           <Image 
                src="/hero__bdntboqignj6_small.jpg"  
                alt="iPhone 17 Pro" 
                fill
                className="object-contain  md:hidden"
                priority
            />
        </div>

        <div className='relative sm:absolute sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 text-center sm:bg-transparent bg-black/80 sm:bg-none py-4 sm:py-0'>
            <div className="mb-2 sm:mb-3">
                <Button className="bg-[#0000FF] hover:bg-[#0000CC] rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 text-sm sm:text-base font-medium transition-colors duration-300 shadow-lg">
                    Buy Now
                </Button>
            </div>
            <h1 className='text-sm sm:text-base md:text-lg lg:text-xl font-light'>
                From ₹134900.00* or ₹21650.00/mo. for 6 mo.‡
            </h1>
        </div>
    </div>
</div>
  )
}

export default Dashboard;