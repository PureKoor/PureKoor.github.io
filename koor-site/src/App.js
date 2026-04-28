import { Suspense, lazy } from "react";
import Main_CoverImage from "./components/Boxes/Main_CoverImage";
import Main_NavBar from "./components/Boxes/Main_NavBar";
import { FaChevronDown } from "react-icons/fa6";

const Main_AFC2025    = lazy(() => import("./components/Boxes/Main_AFC2025"));
const Main_Youtube    = lazy(() => import("./components/Boxes/Main_Youtube"));
const Main_Patreon    = lazy(() => import("./components/Boxes/Main_Patreon"));
const Main_TFYourSona = lazy(() => import("./components/Boxes/Main_TFYourSona"));
const Main_Artwork    = lazy(() => import("./components/Boxes/Main_Artwork"));
const Main_Tanuki     = lazy(() => import("./components/Boxes/Main_Tanuki"));
const Main_FootBar    = lazy(() => import("./components/Boxes/Main_FootBar"));

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#110067] to-[#540051] overflow-x-hidden">

      {/* Above the fold — initial bundle only */}
      <div className="min-h-screen flex flex-col items-center">
        <Main_CoverImage />
        <div className="max-w-screen-xl w-full">
          <Main_NavBar />
        </div>
        <div className="flex-grow" />
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="mb-8 text-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer animate-bounce"
          aria-label="Scroll down to content"
        >
          <FaChevronDown className="w-12 h-12" />
        </button>
      </div>

      {/* Below the fold — lazy chunks, download in parallel while above-fold renders */}
      <Suspense fallback={null}>
        <div className="flex flex-col items-center mx-auto max-w-screen-xl gap-2">
          <div className="max-w-screen-xl w-full">
            <Main_AFC2025 />
          </div>
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
