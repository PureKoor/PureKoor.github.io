import { FaPatreon } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


function Main_NavBar () {
    return (
      <>
        {/* Quick Selection To Boxes */}
<div className="flex flex-wrap items-stretch gap-3 md:gap-6 mx-auto w-full justify-center bg-gradient-to-b from-transparent to-50% from-50% to-[#ffb44a]">
            <a href="#avatar" className="bg-[url('../public/assets/pagebutton_avatar.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4">
              <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
                Avatar
              </span>
            </a>
            <a href="#video" className="bg-[url('../public/assets/pagebutton_video.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4">
              <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
                Video
              </span>
            </a>
            <a href="#icon" className="bg-[url('../public/assets/pagebutton_iconbase.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden min-w-20 lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4">
              <span className="text-3xl lg:ml-0 -ml-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
                Icon Base
              </span>
            </a>
            <a href="#art" className="bg-[url('../public/assets/pagebutton_art.jpg')] bg-cover bg-center bg-no-repeat lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4">
              <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
                Art
              </span>
            </a>
          </div>
        {/* Social Media Buttons */}
          <div className="flex flex-wrap items-stretch gap-3 md:gap-6 mx-auto w-full justify-center bg-gradient-to-b from-transparent to-50% from-50% to-[#ffb44a]">
            <span>
              <a href="https://patreon.purekoor.com" alt="PureKoor's Patreon" >
                <FaPatreon color="white" className="m-auto h-full w-10 object-cover"/>
              </a>
           </span>
            <span>
              <a href="https://bluesky.purekoor.com" alt="PureKoor's Bluesky" >
                <FaBluesky color="white" className="m-auto h-full w-10 object-cover"/>
              </a>
           </span>
             <span>
              <a href="https://youtube.purekoor.com" alt="PureKoor's Youtube" >
                <FaYoutube color="white" className="m-auto h-full w-10 object-cover"/>
              </a>
           </span>
              <span>
              <a href="https://tiktok.purekoor.com" alt="PureKoor's Tiktok" >
                <FaTiktok  color="white" className="m-auto h-full w-10 object-cover"/>
              </a>
           </span>
          </div>
        </>
             );
}

export default Main_NavBar;