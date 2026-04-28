import { FaPatreon, FaBluesky, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Link } from 'react-scroll';

function Main_NavBar() {
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[#ffb600] py-5">
      <div className="grid grid-cols-3 lg:grid-cols-9 justify-items-center gap-3 sm:gap-4 px-4 max-w-3xl lg:max-w-none mx-auto">

        <Link
          to="youtube" smooth duration={500} offset={-100}
          aria-label="YouTube section"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] cursor-pointer
            bg-[url('../public/assets/Buttons/pagebutton_video.webp')] bg-cover bg-center bg-no-repeat
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#ff0000] duration-300 ease-in-out"
        />
        <Link
          to="support" smooth duration={500} offset={-100}
          aria-label="Support section"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] cursor-pointer
            bg-[url('../public/assets/Buttons/pagebutton_support.webp')] bg-cover bg-center bg-no-repeat
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#00FF00] duration-300 ease-in-out"
        />
        <Link
          to="iconbase" smooth duration={500} offset={-100}
          aria-label="Icon Base section"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] cursor-pointer
            bg-[url('../public/assets/Buttons/pagebutton_iconbase.webp')] bg-cover bg-center bg-no-repeat
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#FFA500] duration-300 ease-in-out"
        />
        <Link
          to="art" smooth duration={500}
          aria-label="Artwork section"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] cursor-pointer
            bg-[url('../public/assets/Buttons/pagebutton_art.webp')] bg-cover bg-center bg-no-repeat
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-300 ease-in-out"
        />
        <Link
          to="avatar" smooth duration={500}
          aria-label="Avatar section"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] cursor-pointer
            bg-[url('../public/assets/Buttons/pagebutton_avatar.webp')] bg-cover bg-center bg-no-repeat
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#00FFFF] duration-300 ease-in-out"
        />

        <a
          href="https://patreon.purekoor.com" target="_blank" rel="noopener noreferrer"
          aria-label="PureKoor's Patreon"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] bg-[#3b0000] bg-opacity-70
            flex items-center justify-center
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#ff424d] duration-300 ease-in-out"
        >
          <FaPatreon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </a>
        <a
          href="https://bluesky.purekoor.com" target="_blank" rel="noopener noreferrer"
          aria-label="PureKoor's Bluesky"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] bg-[#3b0000] bg-opacity-70
            flex items-center justify-center
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#25C5DF] duration-300 ease-in-out"
        >
          <FaBluesky className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </a>
        <a
          href="https://youtube.purekoor.com" target="_blank" rel="noopener noreferrer"
          aria-label="PureKoor's YouTube"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] bg-[#3b0000] bg-opacity-70
            flex items-center justify-center
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-[#CD201F] duration-300 ease-in-out"
        >
          <FaYoutube className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </a>
        <a
          href="https://tiktok.purekoor.com" target="_blank" rel="noopener noreferrer"
          aria-label="PureKoor's TikTok"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-4 border-[#4c1a1e] bg-[#3b0000] bg-opacity-70
            flex items-center justify-center
            transition-all hover:scale-110 hover:-translate-y-2 hover:border-white duration-300 ease-in-out"
        >
          <FaTiktok className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </a>

      </div>
    </div>
  );
}

export default Main_NavBar;
