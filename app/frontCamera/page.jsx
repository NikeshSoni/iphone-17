// "use client";

// import React from "react";
// import Image from "next/image";

// const FrontCamera = () => {
//   return (
//     <div className="w-full min-h-screen bg-black flex items-center justify-center p-4">
//       <div className="relative w-[350px] h-[700px]">

//         {/* Centered container for all content */}
//         <div className="absolute inset-0 flex items-center justify-center">

//           {/* Video background */}
//           <div className="absolute inset-[21px] inset-b-[40px] z-10">
//             <Image
//               src="/camra/center_stage__8qi0npohbgye_large_2x.jpg"
//               alt="Main Call"
//               fill
//               className="rounded-3xl object-cover"
//               priority
//             />
//           </div>

//           {/* Phone frame overlay */}
//           <div className="relative w-full h-full z-20">
//             <Image
//               src="/camra/hw__bpyheb9jkbw2_large_2x.png"
//               alt="Phone Frame"
//               fill
//               className=" pointer-events-none"
//               priority
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrontCamera;


"use client";
import Image from "next/image";
import { useState } from "react";

export default function FrontCamera() {

  const screens = {
    ultra: "/camra/stabilized_video_startframe__bpxen4rbbwz6_large_2x.jpg",
    centrePhoto: "/camra/smart_group_selfie_endframe__b4mv6zjp2woi_large.jpg",
    dual: "/camra/front_rear_video__datrh4olqzwy_large.jpg",
    centreVideo: "/camra/center_stage__8qi0npohbgye_large_2x.jpg",
  };

  const [active, setActive] = useState("ultra");

  const tabs = [
    { key: "centrePhoto", label: "Centre Stage for photos", icon: "📸" },
    { key: "dual", label: "Dual Capture video", icon: "🎥" },
    { key: "ultra", label: "Ultra-stabilised video", icon: "⚡" },
    { key: "centreVideo", label: "Centre Stage for video calls", icon: "💬" },
  ];

  return (
    <main className="bg-black flex flex-col items-center py-12 px-4">
      {/* iPhone Frame Container */}
      <div className="relative md-w-[30%] w-[40%] aspect-1/2 max-w-[250px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dynamic screen content */}
          <div className="absolute top-[3%] left-[4%] right-[4%] bottom-[2.5%] z-10">
            <Image
              src={screens[active]}
              alt="Camera screen"
              fill
              className="rounded-3xl transition-all duration-300"
              priority
            />
          </div>

          {/* Phone frame overlay */}
          <div className="relative w-full h-[97%] z-20">
            <Image
              src="/camra/hw__bpyheb9jkbw2_large_2x.png"
              alt="iPhone Frame"
              fill
              className="pointer-events-none select-none"
              priority
            />
          </div>

        </div>
      </div>

      {/* Feature Tabs */}
      {/* Feature Tabs */}
      {/* Feature Tabs */}
      <div
        className="
    mt-6 sm:mt-8 md:mt-10
    flex gap-2 sm:gap-3 md:gap-4
    justify-start sm:justify-center
    overflow-x-auto sm:overflow-visible
    bg-neutral-900 rounded-2xl
    px-2 sm:px-4 md:px-2
    py-2 sm:py-3 md:py-2
    shadow-xl
    max-w-full
    scrollbar-hide
  "
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`
        flex flex-col items-center justify-center
        min-w-[72px] sm:min-w-[96px] md:min-w-[128px]
        px-2 sm:px-3 md:px-4
        py-2
        rounded-xl
        text-[10px] sm:text-xs md:text-sm
        transition-all duration-200
        ${active === t.key
                ? "bg-white text-black font-semibold"
                : "text-gray-300 hover:text-white"
              }
      `}
          >
            <div className="text-base sm:text-lg md:text-xl">
              {t.icon}
            </div>
            <span className="text-center leading-tight">
              {t.label}
            </span>
          </button>
        ))}
      </div>


    </main>
  );
}
