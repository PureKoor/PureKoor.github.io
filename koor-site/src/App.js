import { Suspense, lazy } from "react";
import Main_CoverImage from "./components/Boxes/Main_CoverImage";
import Main_NavBar from "./components/Boxes/Main_NavBar";
import Main_SocialMedia from "./components/Boxes/Main_SocialMedia";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Main_Stars        = lazy(() => import("./components/Boxes/Main_Stars"));
const Main_FWA26        = lazy(() => import("./components/Boxes/Main_FWA26"));
const Main_FWA26_Panel  = lazy(() => import("./components/Boxes/Main_FWA26_Panel"));
const Main_FWA26_TF     = lazy(() => import("./components/Boxes/Main_FWA26_TF"));
const Main_Youtube      = lazy(() => import("./components/Boxes/Main_Youtube"));
const Main_Patreon      = lazy(() => import("./components/Boxes/Main_Patreon"));
const Main_TFYourSona   = lazy(() => import("./components/Boxes/Main_TFYourSona"));
const Main_Artwork      = lazy(() => import("./components/Boxes/Main_Artwork"));
const Main_Tanuki       = lazy(() => import("./components/Boxes/Main_Tanuki"));
const Main_FootBar      = lazy(() => import("./components/Boxes/Main_FootBar"));

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#110067] from-0% to-[#540051] to-50% overflow-x-hidden isolate">

      {/* Starfield — fixed to viewport, behind all content */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Suspense fallback={null}>
          <Main_Stars />
        </Suspense>
      </div>

      {/* Above the fold — initial bundle only */}
      <div className="relative z-10 min-h-screen flex flex-col items-center pt-12 sm:pt-20">
        <Main_CoverImage />
        <div className="max-w-screen-xl w-full">
          <Main_NavBar />
        </div>
        <div className="mt-8 sm:mt-12">
          <Main_SocialMedia />
        </div>
        <div className="flex-grow" />
        <div className="mb-8 flex flex-col items-center animate-bounce hover:[animation-play-state:paused]">
          <Link
            to="fwa-header"
            smooth={true} duration={500} offset={-20}
            className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer flex flex-col items-center transition-transform hover:scale-110 hover:-translate-y-2 hover:border-[#00FF00] duration-450 ease-in-out"
          >
            <span className="font-serif text-2xl mb-2 text-stroke-sm">Find me at FWA!</span>
            <FaChevronDown className="w-12 h-12" />
          </Link>
        </div>
      </div>

      {/* Below the fold — lazy chunks, download in parallel while above-fold renders */}
      <Suspense fallback={null}>
        <div className="relative z-10 flex flex-col items-center mx-auto max-w-screen-xl gap-2">
          <div className="max-w-screen-xl w-full">
          </div>
          <Main_FWA26 />
          <Main_FWA26_Panel />
          <Main_FWA26_TF />
          <Main_Youtube />
          <Main_Patreon />
          <Main_TFYourSona />
          <Main_Artwork />
          <Main_Tanuki />
          <Main_FootBar />
        </div>
      </Suspense>

    </div>
  );
}
