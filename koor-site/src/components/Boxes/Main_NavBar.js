import { FaPatreon } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import { Link } from 'react-scroll';

function Main_NavBar() {
  return (
    <>
      {/* Quick Selection To Boxes */}
      <div className="w-full bg-gradient-to-b from-transparent to-30% from-0% to-[#ffb600]">
        <div className="w-[110%] translate-x-[-5%] gap-3 md:gap-4 flex flex-wrap items-scretch justify-center">
          <Link
            to="youtube"
            smooth={true} duration={500} offset={-100}
            className="bg-[url('../public/assets/Buttons/pagebutton_video.webp')] bg-cover bg-center bg-no-repeat
                      lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4 
                      transition-all hover:scale-x-110 hover:-translate-y-2 hover:border-[#ff0000] duration-450 ease-in-out"
          >
            <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm ">
              Youtube
            </span>
          </Link>
          <Link
            to="support"
            smooth={true} duration={500} offset={-100}
            className="bg-[url('../public/assets/Buttons/pagebutton_support.webp')] bg-cover bg-center bg-no-repeat 
          lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4
          transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#00FF00] duration-450 ease-in-out"
          >
            <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
              Support
            </span>
          </Link>
          <Link
            to="iconbase"
            smooth={true} duration={500} offset={-100}
            className="bg-[url('../public/assets/Buttons/pagebutton_iconbase.webp')] bg-cover bg-center bg-no-repeat 
          overflow-hidden min-w-20 lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4
          transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FFA500] duration-450 ease-in-out"
          >
            <span className="text-3xl lg:ml-0 -ml-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
              Icon Base
            </span>
          </Link>
          <Link
            to="art"
            smooth={true} duration={500}
            className="bg-[url('../public/assets/Buttons/pagebutton_art.webp')] bg-cover bg-center bg-no-repeat 
          lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4
          transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out"
          >
            <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
              Artwork
            </span>
          </Link>
          {/* <a
          href="#tiktok"
          className="bg-[url('../public/assets/Buttons/pagebutton_avatar.webp')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Video
          </span>
        </a> */}
          <Link
            to="avatar"
            smooth={true} duration={500}
            className="bg-[url('../public/assets/Buttons/pagebutton_avatar.webp')] bg-cover bg-center bg-no-repeat 
          lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4
          transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#00FFFF] duration-450 ease-in-out"
          >
            <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
              Avatar
            </span>
          </Link>
        </div>
        {/* Social Media Buttons */}

        <div className="flex flex-wrap items-stretch gap-3 md:gap-6 mx-auto w-full justify-center bg-[#ffb600]">
          <div className="flex flex-wrap items-stretch mx-auto w-full justify-center bg-blue ">
            <span>
              <a
                href="https://patreon.purekoor.com"
                alt="PureKoor's Patreon"
                aria-label="PureKoor's Patreon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPatreon
                  color="white"
                  className="p-2 my-5 mx-7 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400
                            transition-transform hover:scale-x-110 hover:-translate-y-2 duration-150 ease-in hover:fill-black"
                />
              </a>
            </span>
            <span>
              <a
                href="https://bluesky.purekoor.com"
                alt="PureKoor's Bluesky"
                aria-label="PureKoor's Bluesky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBluesky
                  color="white"
                  className="p-2 my-5 mx-7 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 
                transition-transform hover:scale-x-110 hover:-translate-y-2 duration-150 ease-in hover:fill-[#25C5DF]"
                />
              </a>
            </span>
            <span>
              <a
                href="https://youtube.purekoor.com"
                alt="PureKoor's Youtube"
                aria-label="PureKoor's Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  color="white"
                  className="p-2 my-5 mx-7 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 
                transition-transform hover:scale-x-110 hover:-translate-y-2 duration-150 ease-in hover:fill-[#CD201F]"
                />
              </a>
            </span>
            <span>
              <a
                href="https://tiktok.purekoor.com"
                alt="PureKoor's Tiktok"
                aria-label="PureKoor's Tiktok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok
                  color="white"
                  className="p-2 my-5 mx-7 h-4/5 w-4/5 rounded-2xl flex items-center text-4xl justify-center outline-dashed bg-black-400 
                transition-transform hover:scale-x-110 hover:-translate-y-2 duration-150 ease-in hover:fill-black"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_NavBar;
