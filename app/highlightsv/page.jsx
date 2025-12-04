"use client"
import { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const phones = [
    {
        id: 1,
        color: 'Heat‑forged aluminium unibody design for exceptional pro capability.',
        src: '/highlights-apple.jpg'
    },
    {
        id: 2,
        color: 'A19 Pro, vapour-cooled for lightning‑fast performance. Breakthrough battery life.',
        src: '/highlights_chip.jpg'
    },
    {
        id: 3,
        color: 'The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone.',
        src: '/highlights_zoom.jpg'
    },
    {
        id: 4,
        color: 'iOS 26. New look. Even more magic.',
        src: '/highlights_ios.jpg'
    },
    {
        id: 5,
        color: 'Apple Intelligence. Effortlessly helpful features — from image creation to Live Translation.1, 2',
        src: '/highlights_apple.jpg'
    }
];



export default function PhoneCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % phones.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + phones.length) % phones.length);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay);
    };

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const currentPhone = phones[currentIndex];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full container relative z-10">
                {/* Title */}
                <div className="container mb-10 md:mb-16">
                    <h1 className="text-2xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                        Heat-forged aluminium
                        <br />
                        <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            unibody design
                        </span>
                    </h1>
                    <p className="text-[1rem] md:text-2xl text-gray-300 font-light">
                        Exceptional pro capability meets elegant craftsmanship
                    </p>
                </div>



                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
                    {/* Image Section - 40% */}
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <div
                            key={currentPhone.id}
                            className="w-full max-w-md lg:max-w-none flex justify-center animate-fadeIn transition-all duration-700 transform hover:scale-105"
                        >
                            <img
                                src={currentPhone.src}
                                alt={`iPhone in ${currentPhone.color}`}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 max-w-md lg:max-w-none space-y-8">
                        {/* Color Info */}
                        <div className="text-center lg:text-left">
                            <p className="text-gray-400 text-sm font-medium mb-2">AVAILABLE IN</p>
                            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-2">
                                {currentPhone.color}
                            </h2>
                            <p className="text-gray-300  text-[0.8rem] md:text-lg">
                                {currentIndex + 1} of {phones.length} finishes
                            </p>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 justify-center lg:justify-start">
                                {phones.map((phone, index) => (
                                    <button
                                        key={phone.id}
                                        onClick={() => goToSlide(index)}
                                        className={`group relative transition-all duration-300 ${index === currentIndex
                                            ? 'scale-110'
                                            : 'hover:scale-105'
                                            }`}
                                        aria-label={`Show ${phone.color} finish`}
                                    >
                                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-white scale-110'
                                            : 'bg-gray-600 group-hover:bg-gray-400'
                                            }`} />
                                        {index === currentIndex && (
                                            <div className="absolute -inset-2 border border-white/30 rounded-full animate-pulse" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700 rounded-full h-0.5">
                                <div
                                    className="bg-white h-0.5 rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${((currentIndex + 1) / phones.length) * 100}%`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                                aria-label="Previous phone"
                            >
                                <ChevronLeft
                                    size={20}
                                    className="text-white group-hover:scale-110 transition-transform"
                                />
                            </button>

                            {/* Play/Pause Button */}
                            <button
                                onClick={toggleAutoPlay}
                                className={`p-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${isAutoPlay
                                    ? 'bg-white text-black hover:bg-gray-100'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                    }`}
                                aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
                            >
                                {isAutoPlay ?
                                    <Pause size={24} className="fill-current" /> :
                                    <Play size={24} className="fill-current" />
                                }
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                                aria-label="Next phone"
                            >
                                <ChevronRight
                                    size={20}
                                    className="text-white group-hover:scale-110 transition-transform"
                                />
                            </button>
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                                <div className="text-white font-semibold mb-1">Aerospace-grade</div>
                                <div className="text-gray-400 text-sm">Aluminium</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                                <div className="text-white font-semibold mb-1">Seamless</div>
                                <div className="text-gray-400 text-sm">Unibody</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
      `}</style>
        </div>
    );
}