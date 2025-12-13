"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Telephoto = () => {

    const [current, setCurrent] = useState("200mm");
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const images = {
        "200mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "100mm": "/zoom/100mm__cykxcenbhvue_large_2x.jpg",
        "48mm": "/zoom/48mm__bmrwps1q6w76_large_2x.jpg",
        "35mm": "/zoom/35mm__k375wbkrjp2e_large_2x.jpg",
        "28mm": "/zoom/28mm__fylmxo06jq6i_large_2x.jpg",
        "24mm": "/zoom/24mm__e54cxtdkdrwy_large_2x.jpg",
        "13mm": "/zoom/13mm__dzafu9h1kaye_large_2x.jpg",
        Macro: "/zoom/macro__bb7oud7ri2o2_large_2x.jpg",
    };

    const mobileimages = {
        "200mm": "/zoom/200mm__responsive.jpg",
        "100mm": "/zoom/100mm__responsive.jpg",
        "48mm": "/zoom/48mm__responsive.jpg",
        "35mm": "/zoom/35mm__responsive.jpg",
        "28mm": "/zoom/28mm__responsive.jpg",
        "24mm": "/zoom/24mm__responsive.jpg",
        "13mm": "/zoom/13mm__responsive.jpg",
        Macro: "/zoom/macro__responsive.jpg",
    };

    

    const handleImageChange = (key) => {
        if (key === current || isTransitioning) return;

        setIsTransitioning(true);
        setCurrent(key);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <div className='container mx-auto'>
            <div className="text-[#c5bdbdd3] w-[90%] md:w-[50%] text-center mx-auto mt-5">
                <p className="text-1xl md:text-lg">
                    Across the iPhone 17 Pro camera system, you’ll find
                    innovation that goes to great lengths. The telephoto
                    features the next generation of our tetraprism design
                    and a 56% larger sensor. With an equivalent 200 mm focal
                    length, the 8x optical-quality zoom makes this
                    <span className='font-bold text-white'> the longest
                        iPhone Telephoto ever</span> — offering 16x total optical zoom range.
                    So you can explore an even wider range of creative choices and
                    add a longer reach to your compositions.
                </p>
            </div>

            <div className="md:min-h-0 w-full flex flex-col items-center justify-center bg-black text-white p-6">
                <div className="relative w-full max-w-5xl aspect-video rounded-xl shadow-xl overflow-hidden">
                    <Image
                        src={isMobile ? mobileimages[current] : images[current]}
                        alt={current}
                        fill
                        className={`aspect-video object-cover transition-all duration-500 ease-in-out ${isTransitioning ? 'scale-95 opacity-95' : 'opacity-100 scale-100'
                            }`}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-6 p-3 bg-zinc-900 rounded-full shadow-xl">
                    {Object.keys(images).map((key) => (
                        <Button
                            key={key}
                            variant={current === key ? "default" : "secondary"}
                            className="px-5 py-2 rounded-full text-sm transition-all duration-300"
                            onClick={() => handleImageChange(key)}
                            disabled={isTransitioning}
                        >
                            {key}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Telephoto