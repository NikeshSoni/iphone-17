import React from 'react'
import Image from 'next/image'

const Design = () => {
    return (
        <div className='container mx-auto my-6'>
            <div className='text-center text-white max-w-[60%] mx-auto'>
                <h1 className='text-[#ff791b] text-2xl md:text-3xl my-2'>Design</h1>
                <h1 className='text-2xl md:text-4xl xl:text-6xl font-bold'>Unibody enclosure.</h1>
                <h1 className='text-2xl md:text-4xl xl:text-6xl font-bold mt-2'>Makes a strong case for itself.</h1>
                <p className='text-[#aeadaa] mt-4'>Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed
                    from the inside out to be the most powerful iPhone models ever made.
                    At the core of the new design is a heat-forged aluminium unibody enclosure
                    that maximises performance, battery capacity and durability.
                </p>
            </div>

            <div className="mx-auto">
                <img src="/design_endframe.jpg" className="w-[80%] h-auto mx-auto hidden  md:block"  />
                <img src="/design_small.jpg" className=" h-100 mt-4 mx-auto md:hidden" />
            </div>

            

            {/* design_image */}

        </div>
    )
}

export default Design