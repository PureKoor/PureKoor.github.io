import Main_CoverImage from "./components/Boxes/Main_CoverImage";
import Main_NavBar from "./components/Boxes/Main_NavBar";
import Main_AFC2025 from "./components/Boxes/Main_AFC2025";
import Main_TFYourSona from "./components/Boxes/Main_TFYourSona";
import Main_Youtube from "./components/Boxes/Main_Youtube";
import Main_Tanuki from "./components/Boxes/Main_Tanuki";
import Main_Artwork from "./components/Boxes/Main_Artwork";
import Main_FootBar from "./components/Boxes/Main_FootBar";
import Main_Patreon from "./components/Boxes/Main_Patreon";
import { FaChevronDown } from "react-icons/fa6";

/* Old Or Unused */
import KoorMetaTags from "./components/KoorMetaTags";
import Main_SomnaDeal from "./components/Boxes/Main_SomnaDeal";
import Main_Tiktok from "./components/Boxes/Main_Tiktok";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#110067] to-[#540051] overflow-x-hidden">

      {/* Above the fold */}
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

      {/* Below the fold */}
      <div className="flex flex-col items-center mx-auto max-w-screen-xl gap-2">
        <div className="max-w-screen-xl w-full">
          <Main_AFC2025 />
        </div>
        <Main_Youtube />
        <Main_Patreon />
        <Main_TFYourSona />
        <Main_Artwork />
        {/* <Main_Tiktok /> */}
        <Main_Tanuki />
        <Main_FootBar />
      </div>

    </div>
  );
}
