
import { FaBluesky, FaYoutube, FaTelegram,FaPatreon   } from "react-icons/fa6";

function Main_Artwork () {
    return (
         <div id="art" className="bg-[url('../public/assets/Patreon_FW_2021Apr29_NierReplicant_TXless_HiRes.png')] max-w-screen-xl  w-full bg-cover bg-top bg-no-repeat">
          <div className="flex flex-row justify-between items-start gap-5 my-5 flex-wrap w-full">
            <div className="shrink-0 grow-0 grid grid-cols-2 grid-rows-2 h-80 w-80 gap-5 mx-5">
              <a href="https://bsky.app/profile/purekoor.art" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                <FaBluesky color="#87CEEB" className="m-auto h-full w-full object-cover"/>
              </a>
              <a href="https://www.youtube.com/@PureKoor/community" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                    <FaYoutube color="#CD201F" className="m-auto h-full w-full object-cover"/>
              </a>
              <a href="https://t.purekoor.com/" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                    <FaTelegram color="#24A1DE" className="m-auto h-full w-full object-cover"/>
              </a>
              <a href="https://patreon.purekoor.com/" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                    <FaPatreon  color="#black" className="m-auto h-full w-full object-cover"/>
              </a>
            </div>
            <div className="grow-0 shrink-0 text-4xl text-white font-serif bg-black bg-opacity-25 inline">
              <p className="mx-3 my-1">Artist for over a decade</p>
              <p className="mx-3 my-1">Furry Illustrations</p>
              <p className="mx-3 my-1">View my Artworks</p>
            </div>
          </div>
        </div>
    );
}

export default Main_Artwork;


