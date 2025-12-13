import Image from "next/image";
import Dashboard from "./dashboard/page";
import PhoneCarousel from "./highlightsv/page"
import Design from "./Design/page";
import IPhoneThermalShowcase from "./closerLook/page";
import Zoom from "./zoom/page";
import Telephoto from "./Telephoto/page"
import Lenses from "./lenses/page"
import FrontCamerr from "./frontCamera/page"

export default function Home() {
  return (
    <div className="">
       <Dashboard />
       <PhoneCarousel />
       <Design />
       <IPhoneThermalShowcase />
       <Zoom />
       <Telephoto />
       <Lenses />
       <FrontCamerr />
    </div>
  );
}
