import Image from 'next/image'

const Lenses = () => {

    const cameras = [
        {
            title: "48MP Fusion Main camera",
            specs: [
                "24/48 mm focal length (1x/2x)",
                "f/1.78 aperture",
                "2.44 μm quad-pixel (1.22 μm individual)",
            ],
        },
        {
            title: "48MP Fusion Ultra Wide camera",
            specs: [
                "13 mm focal length (.5x/macro)",
                "f/2.2 aperture",
                "1.4 μm quad-pixel (0.7 μm individual)",
            ],
        },
        {
            title: "48MP Fusion Telephoto camera",
            specs: [
                "100/200 mm focal length (4x/8x)",
                "f/2.8 aperture",
                "1.4 μm quad-pixel (0.7 μm individual)",
            ],
        },
    ];

    return (

        <div className="container mx-auto mt-10">
            <div className='text-center text-white w-[80%] md-w-[60%] mx-auto'>
                <h1 className='text-[#86868b]'>
                    Like having <span>8 pro lenses in your pocket.</span> Super-high-resolution
                    <span>24MP photos by default.</span>
                </h1>
                <p>
                    With the new iPhone 17 Pro, you can zoom in closer than ever before. The 8x optical-quality zoom is like having 8 pro lenses in your pocket. And with the new 24MP photos by default, you can capture even more detail.
                </p>
            </div>
            <div className='my-5'>
                <Image
                    src="/lenses/rear_camera__c9hqca901ugm_xlarge_2x.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="rear camera"
                    className="w-full h-full object-cover hidden md:block"
                    style={{ width: '100%', height: 'auto' }}
                />

                <Image
                    src="/lenses/rear_camera__c9hqca901ugm_small_2x.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="rear camera"
                    className="w-full h-full object-cover md:hidden"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>


            <div className="w-full bg-black text-white py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    {cameras.map((cam, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-xl font-semibold">{cam.title}</h2>
                            <div className="h-px bg-gray-700 w-full"></div>

                            <ul className="space-y-3 text-gray-300">
                                {cam.specs.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Lenses