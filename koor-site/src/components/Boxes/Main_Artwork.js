
import { FaBluesky, FaYoutube, FaTelegram, FaPatreon } from "react-icons/fa6";

function Main_Artwork() {
  return (
    <div id="art" className="bg-[url('../public/assets/Patreon_FW_2021Apr29_NierReplicant_TXless_HiRes.png')] max-w-screen-xl  w-full bg-cover bg-top bg-no-repeat">
      <div className="grid grid-cols-2 grid-rows-1 gap-5 my-5 w-full">
        <div className="col-start-1 col-span-1 flex flex-col">
          <div className="grow-0 shrink-0 text-4xl text-white font-serif text-center inline">
            <p>Find my latest public art on:</p>
          </div>
          <div className="mt-5">
            <div className="shrink-0 grow-0 grid grid-cols-3 grid-rows-1 gap-5 mx-5 w-full">
              <a href="https://bsky.app/profile/purekoor.art/feed/aaai3eugpcmhq" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                <FaBluesky color="#87CEEB" className="m-auto h-full w-full object-cover" />
              </a>
              <a href="https://www.youtube.com/@PureKoor/community" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                <FaYoutube color="#CD201F" className="m-auto h-full w-full object-cover" />
              </a>
              <a href="https://t.purekoor.com/" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                <FaTelegram color="#24A1DE" className="m-auto h-full w-full object-cover" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main_Artwork;


