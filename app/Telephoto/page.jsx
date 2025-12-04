"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Telephoto = () => {

    const [current, setCurrent] = useState("200mm");

    const images = {
        "200mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "100mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "48mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "35mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "28mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "24mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        "13mm": "/closerLook/200mm__c8kya18imsqe_large.jpg",
        Macro: "/closerLook/200mm__c8kya18imsqe_large.jpg",
    };

    return (
        <div className='container mx-auto'>
            <div className="text-[#c5bdbdd3] w-[50%] text-center mx-auto mt-5">
                <p>
                    Across the iPhone 17 Pro camera system, you’ll find
                    innovation that goes to great lengths. The telephoto
                    features the next generation of our tetraprism design
                    and a 56% larger sensor. With an equivalent 200 mm focal
                    length, the 8x optical-quality zoom makes this
                    <span className='font-bold text-white'>the longest
                        iPhone Telephoto ever</span> — offering 16x total optical zoom range.
                    So you can explore an even wider range of creative choices and
                    add a longer reach to your compositions.
                </p>
            </div>

            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white p-6">
                <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src={images[current]}
                        alt={current}
                        fill
                        className="object-cover"
                    />
                </div>


                <div className="flex flex-wrap justify-center gap-3 mt-6 p-3 bg-zinc-900 rounded-full shadow-xl">
                    {Object.keys(images).map((key) => (
                        <Button
                            key={key}
                            variant={current === key ? "default" : "secondary"}
                            className="px-5 py-2 rounded-full text-sm"
                            onClick={() => setCurrent(key)}
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
