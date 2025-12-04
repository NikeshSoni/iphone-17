import Image from 'next/image'

const Zoom = () => {
    return (
        <div className='mb-10 md:mb-5'>
            <div className='text-center mt-5'>
                <h1 className='text-[#ff791b] text-2xl md:text-4xl'> Cameras</h1>
                <h1 className='text-2xl md:text-6xl font-bold text-white'> A big zoom forward.</h1>
            </div>

            <div className="block md:flex">
                <div className="col-6 mt-5">
                    <Image
                        src='/closerLook/hero_camera.jpg'
                        width={0}
                        height={0}
                        sizes="100vw"
                        className='hidden md:block'
                        style={{ width: '100%', height: 'auto' }}
                        alt="Hero camera image"
                    />

                    <Image
                        src='/closerLook/hero_camera__small.jpg'
                        width={0}
                        height={0}
                        className=' md:hidden'
                        sizes="100vw"
                        style={{ width: '70%', height: 'auto' }}
                        alt="Hero camera image"
                    />


                    {/* hero_camera__small */}
                </div>
                <div className="col-6 gap-5 flex md:flex-col justify-center mt-5 md:mt-0 md:ml-[5rem]">
                    <div className="text-[#86868b] text-center md:text-left">
                        <h3 className=' text-1xl md:text-2xl'>Up to</h3>
                        <h1 className='text-[#ff791b] lg:text-4xl font-bold'>8x</h1>
                        <h3 className='text-1xl md:text-[1.2rem] '>optical-quality zoom</h3>
                    </div>
                    <div className="text-[#86868b] md:mt-4 text-center md:text-left">
                        <h3 className='text-1xl md:text-2xl'>All </h3>
                        <h1 className='text-[#ff791b] lg:text-4xl font-bold'>48MP</h1>
                        <h3 className='text-1xl md:text-[1.2rem] '>rear cameras</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zoom;
