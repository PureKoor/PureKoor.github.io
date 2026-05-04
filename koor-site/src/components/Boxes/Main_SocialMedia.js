import { FaPatreon, FaBluesky, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";

function Main_SocialMedia() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 justify-items-center items-center gap-6 sm:gap-10 px-4 mx-auto w-fit">
      <a
        href="https://patreon.purekoor.com" target="_blank" rel="noopener noreferrer"
        aria-label="PureKoor's Patreon"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl border-4 border-[#4a2787] bg-[#0d0033] bg-opacity-70
          flex items-center justify-center
          transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#ff424d] duration-300 ease-in-out"
      >
        <FaPatreon className="w-14 h-14 sm:w-24 sm:h-24 text-white" />
      </a>
      <a
        href="https://bluesky.purekoor.com" target="_blank" rel="noopener noreferrer"
        aria-label="PureKoor's Bluesky"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl border-4 border-[#4a2787] bg-[#0d0033] bg-opacity-70
          flex items-center justify-center
          transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#25C5DF] duration-300 ease-in-out"
      >
        <FaBluesky className="w-14 h-14 sm:w-24 sm:h-24 text-white" />
      </a>
      <a
        href="https://youtube.purekoor.com" target="_blank" rel="noopener noreferrer"
        aria-label="PureKoor's YouTube"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl border-4 border-[#4a2787] bg-[#0d0033] bg-opacity-70
          flex items-center justify-center
          transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#CD201F] duration-300 ease-in-out"
      >
        <FaYoutube className="w-14 h-14 sm:w-24 sm:h-24 text-white" />
      </a>
      <a
        href="https://tiktok.purekoor.com" target="_blank" rel="noopener noreferrer"
        aria-label="PureKoor's TikTok"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl border-4 border-[#4a2787] bg-[#0d0033] bg-opacity-70
          flex items-center justify-center
          transition-all hover:scale-110 hover:-translate-y-2 hover:border-white duration-300 ease-in-out"
      >
        <FaTiktok className="w-14 h-14 sm:w-24 sm:h-24 text-white" />
      </a>
      <a
        href="https://telegram.purekoor.com" target="_blank" rel="noopener noreferrer"
        aria-label="PureKoor's Telegram"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl border-4 border-[#4a2787] bg-[#0d0033] bg-opacity-70
          flex items-center justify-center
          transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#229ED9] duration-300 ease-in-out"
      >
        <FaTelegram className="w-14 h-14 sm:w-24 sm:h-24 text-white" />
      </a>
      <a
        href="https://gumroad.purekoor.com" target="_blank" rel="noopener noreferrer"
        aria-label="PureKoor's Gumroad"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl border-4 border-[#4a2787] bg-[#0d0033] bg-opacity-70
          flex items-center justify-center
          transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#FF90E8] duration-300 ease-in-out"
      >
        <SiGumroad className="w-14 h-14 sm:w-24 sm:h-24 text-white" />
      </a>
    </div>
  );
}

export default Main_SocialMedia;
