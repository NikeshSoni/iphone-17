"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';

export default function IPhoneThermalShowcase() {
    const [activeSection, setActiveSection] = useState('vapour');
    const [isExpanded, setIsExpanded] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const carouselRef = useRef(null);

    const sections = [
        {
            id: 'colours',
            title: 'Colours',
            icon: '●',
            description: 'Available in stunning finishes including Black Titanium, White Titanium, Natural Titanium, and Desert Titanium. Each colour features a beautifully crafted textured matte glass back.',
            image: './closerLook/colors_orange.jpg',
            reponsiveImg: './closerLook/initial-responsive.jpg'
        },
        {
            id: 'aluminium',
            title: 'Aluminium unibody',
            icon: '+',
            description: 'Precision-machined aerospace-grade titanium frame with a refined microblasted finish. Incredibly strong yet lightweight for optimal durability and comfort.',
            image: './closerLook/unibody__eublzdgtajo2_large.jpg',
            reponsiveImg: './closerLook/unibody__responsive.jpg'
        },
        {
            id: 'vapour',
            title: 'Vapour chamber',
            icon: null,
            description: 'Deionised water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.',
            image: './closerLook/vapor_chamber__b47ohuu3w8eu_large_2x.jpg',
            reponsiveImg: './closerLook/vapor_chamber__b47ohuu3w8eu_small.jpg'
        },
        {
            id: 'ceramic',
            title: 'Ceramic Shield',
            icon: '+',
            description: 'Advanced ceramic crystal structure with nano-ceramic crystals embedded in the glass matrix. Tougher than any smartphone glass, providing exceptional drop protection.',
            image: './closerLook/ceramic_shield__de0653vp43cm_large_2x.jpg',
            reponsiveImg: './closerLook/ceramic_shield__de0653vp43cm_small.jpg'
        },
        {
            id: 'display',
            title: 'Immersive pro display',
            icon: '+',
            description: 'Super Retina XDR display with ProMotion technology featuring adaptive refresh rates up to 120Hz. Always-On display with 2000 nits peak brightness for incredible outdoor visibility.',
            image: './closerLook/pro_display__c0jmzc5emcae_large_2x.jpg',
            reponsiveImg: './closerLook/pro_display__c0jmzc5emcae_small.jpg'
        },
        {
            id: 'camera',
            title: 'Camera Control',
            icon: '+',
            description: 'Innovative capacitive button with precise tactile feedback. Launch camera instantly, adjust settings with light presses, and capture with a full press for the perfect shot.',
            image: './closerLook/camera_control__cy5kilwa0kwi_large_2x.jpg',
            reponsiveImg: './closerLook/camera_control__cy5kilwa0kwi_small.jpg'
        },
        {
            id: 'action',
            title: 'Action button',
            icon: '+',
            description: 'Customizable button that can instantly activate your most-used features. Set it to Silent mode, Camera, Voice Memo, Flashlight, or your favorite Shortcut.',
            image: './closerLook/viewer_action_button_endframe__d34dse8308uq_large_2x.jpg',
            reponsiveImg: './closerLook/viewer_action_button_endframe__d34dse8308uq_small.jpg'
        }
    ];

    const getCurrentImage = () => {
        const section = sections.find(s => s.id === activeSection);
        return section?.image;
    };

    const getCurrentResponsiveImage = () => {
        const section = sections.find(s => s.id === activeSection);
        return section?.reponsiveImg;
    };

    const handleSectionChange = (sectionId) => {
        if (sectionId === activeSection || isTransitioning) return;

        setIsTransitioning(true);
        setActiveSection(sectionId);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 300);
    };

    // Scroll carousel to active section
    useEffect(() => {
        if (carouselRef.current) {
            const activeButton = carouselRef.current.querySelector(`[data-section-id="${activeSection}"]`);
            if (activeButton) {
                activeButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeSection]);

    const handleExpandToggle = () => {
        setIsTransitioning(true);
        setIsExpanded(!isExpanded);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-[#1d1d1f] text-white mx-auto p-4">
            <div className="bg-black rounded-sm md:rounded-4xl p-4 mx-auto w-[100%] md:w-[90%] lg:w-[80%]">
                <div className='w-[100%] mx-auto mt-4'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                        Take a closer look.
                    </h1>
                </div>
                <div className="md:flex justify-center items-center">
                    <div className="md:relative w-[100%]  flex justify-center">
                        {/* Mobile Image - shows reponsiveImg */}
                        <img
                            src={getCurrentResponsiveImage()}
                            alt={sections.find(s => s.id === activeSection)?.title}
                            className={`w-full mx-auto block md:hidden h-auto relative object-cover rounded-2xl transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                } shadow-2xl`}
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                        
                        {/* Desktop Image - shows section image */}
                        <img
                            src={getCurrentImage()}
                            alt={sections.find(s => s.id === activeSection)?.title}
                            className={`w-full mx-auto hidden md:block h-auto relative object-cover rounded-2xl transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                } shadow-2xl`}
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />

                        
                        {/* Desktop Section List - Left Side */}
                        <div className="hidden md:block md:absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                            <div className="shrink-0 w-80">
                                <div className="space-y-3">
                                    {sections.map((section, index) => (
                                        <div key={section.id} className="transition-all duration-300 ease-in-out">

                                            <button
                                                onClick={() => handleSectionChange(section.id)}
                                                className={`w-full text-left transition-all duration-300 ease-out transform hover:scale-[1.02] ${section.description && activeSection === section.id
                                                    ? 'bg-white/10 rounded-2xl p-4 shadow-lg'
                                                    : activeSection === section.id
                                                        ? 'bg-white/10 px-5 py-3 shadow-md'
                                                        : 'bg-white/5 hover:bg-white/10 px-5 py-3'
                                                    } ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {section.icon && (
                                                        <span className={`transition-all duration-300 ${section.icon === '●'
                                                            ? 'text-orange-500 text-2xl'
                                                            : 'text-white/60 hover:text-white'
                                                            } ${activeSection === section.id ? 'scale-110' : ''}`}>
                                                            {section.icon === '+' ? <Plus className="w-4 h-4" /> : section.icon}
                                                        </span>
                                                    )}
                                                    <span className="font-medium transition-all duration-300">
                                                        {section.title}
                                                    </span>
                                                </div>
                                                {section.description && activeSection === section.id && (
                                                    <p className="mt-3 text-sm text-white/70 leading-relaxed transition-all duration-500 ease-in-out">
                                                        {section.description}
                                                    </p>
                                                )}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Carousel - Bottom */}
                <div className="block md:hidden mt-6 pb-4">
                    <div 
                        ref={carouselRef}
                        className="overflow-x-auto scrollbar-hide" 
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        <div className="flex gap-3 px-2" style={{ scrollSnapType: 'x mandatory' }}>
                            {sections.map((section, index) => (
                                <button
                                    key={section.id}
                                    data-section-id={section.id}
                                    onClick={() => handleSectionChange(section.id)}
                                    className={`shrink-0 transition-all duration-300 ease-out transform ${activeSection === section.id
                                        ? 'bg-white/10 rounded-2xl p-4 shadow-lg scale-105'
                                        : 'bg-white/5 rounded-xl px-4 py-3'
                                        } ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        {section.icon && (
                                            <span className={`transition-all duration-300 ${section.icon === '●'
                                                ? 'text-orange-500 text-2xl'
                                                : 'text-white/60'
                                                } ${activeSection === section.id ? 'scale-110' : ''}`}>
                                                {section.icon === '+' ? <Plus className="w-5 h-5" /> : section.icon}
                                            </span>
                                        )}
                                        <span className={`font-medium text-sm text-center transition-all duration-300 ${activeSection === section.id ? 'text-white' : 'text-white/70'}`}>
                                            {section.title}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Description for active section on mobile */}
                    {sections.find(s => s.id === activeSection)?.description && (
                        <div className="mt-4 px-4">
                            <p className="text-sm text-white/70 leading-relaxed transition-all duration-500 ease-in-out">
                                {sections.find(s => s.id === activeSection)?.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}