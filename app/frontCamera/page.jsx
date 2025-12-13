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
    ultra: "/camra/center_stage__8qi0npohbgye_large_2x.jpg",
    centrePhoto: "/camra/center_stage__8qi0npohbgye_large_2x.jpg",
    dual: "/camra/stabilized_video_startframe__bpxen4rbbwz6_large_2x.jpg",
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
    <main className="min-h-screen bg-black flex flex-col items-center py-12 px-4">
      {/* iPhone Frame Container */}
      <div className="relative w-[300px] h-[600px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dynamic screen content */}
          <div className="absolute top-[15px] left-[15px] right-[21px] bottom-[40px] z-10">
            <Image
              src={screens[active]}
              alt="Camera screen"
              fill
              className="rounded-3xl"
              priority
            />
          </div>

          {/* Phone frame overlay */}
          <div className="relative w-full h-full z-20">
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
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 bg-neutral-900 rounded-2xl px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 shadow-xl max-w-[95vw] sm:max-w-full">

        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`flex flex-col items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs w-20 sm:w-24 md:w-32 transition 
              ${active === t.key ? "bg-white text-black font-semibold" : "text-gray-300"}
            `}
          >
            <div className="text-base sm:text-lg">{t.icon}</div>
            <span className="text-center leading-tight">{t.label}</span>
          </button>
        ))}

      </div>
    </main>
  );
}
