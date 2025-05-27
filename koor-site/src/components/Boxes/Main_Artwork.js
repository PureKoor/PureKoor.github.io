import { FaBluesky, FaYoutube, FaTelegram } from "react-icons/fa6";
import "./MainArtwork.css"; // for custom styles

function Main_Artwork() {
  return (
    <div id="art" className="relative max-w-screen-xl w-full overflow-hidden h-[400px]">
      {/* Background slices */}
      <div className="absolute inset-0 bg-slice bg1 z-0" />
      <div className="absolute inset-0 bg-slice bg2 z-0" />
      <div className="absolute inset-0 bg-slice bg3 z-0" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-2 grid-rows-1 gap-5 my-5 w-full h-full">
        <div className="col-start-1 col-span-1 flex flex-col justify-center">
          <div className="text-4xl text-white font-serif text-center text-stroke-sm">
            <p>Find my latest public art on:</p>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-3 gap-5 mx-5 ">
              <a
                href="https://bsky.app/profile/purekoor.art/feed/aaai3eugpcmhq"
                className="border-4 rounded-xl border-white bg-white overflow-hidden"
              >
                <FaBluesky color="#87CEEB" className="m-auto h-full w-full object-cover" />
              </a>
              <a
                href="https://www.youtube.com/@PureKoor/community"
                className="border-4 rounded-xl border-white bg-white overflow-hidden"
              >
                <FaYoutube color="#CD201F" className="m-auto h-full w-full object-cover" />
              </a>
              <a
                href="https://t.purekoor.com/"
                className="border-4 rounded-xl border-white bg-white overflow-hidden"
              >
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
