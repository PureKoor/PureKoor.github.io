import { FaPatreon } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Main_NavBar() {
  return (
    <>
      {/* Quick Selection To Boxes */}
      <div className="flex flex-wrap items-stretch gap-3 md:gap-6 mx-auto w-full justify-center bg-gradient-to-b from-transparent to-80% from-10% to-[#ffb600]">
        <a
          href="#youtube"
          className="bg-[url('../public/assets/pagebutton_art.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Youtube
          </span>
        </a>
        <a
          href="#support"
          className="bg-[url('../public/assets/pagebutton_avatar.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Support
          </span>
        </a>
        <a
          href="#iconbase"
          className="bg-[url('../public/assets/pagebutton_iconbase.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden min-w-20 lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Icon Base
          </span>
        </a>
        <a
          href="#art"
          className="bg-[url('../public/assets/pagebutton_art.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Art
          </span>
        </a>
        <a
          href="#tiktok"
          className="bg-[url('../public/assets/pagebutton_video.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Video
          </span>
        </a>
        <a
          href="#avatar"
          className="bg-[url('../public/assets/pagebutton_avatar.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Avatar
          </span>
        </a>
      </div>
      {/* Social Media Buttons */}

      <div className="flex flex-wrap items-stretch gap-3 md:gap-6 mx-auto w-full justify-center bg-[#ffb600]">
        <div className="flex flex-wrap items-stretch mx-auto w-full justify-center bg-blue ">
          <span>
            <a href="https://patreon.purekoor.com" alt="PureKoor's Patreon">
              <FaPatreon
                color="white"
                className="p-2 m-5 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 "
              />
            </a>
          </span>
          <span>
            <a href="https://bluesky.purekoor.com" alt="PureKoor's Bluesky">
              <FaBluesky
                color="white"
                className="p-2 m-5 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 "
              />
            </a>
          </span>
          <span>
            <a href="https://youtube.purekoor.com" alt="PureKoor's Youtube">
              <FaYoutube
                color="white"
                className="p-2 m-5 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 "
              />
            </a>
          </span>
          <span>
            <a href="https://tiktok.purekoor.com" alt="PureKoor's Tiktok">
              <FaTiktok
                color="white"
                className="p-2 m-5 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 "
              />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Main_NavBar;
