import ReactPlayer from "react-player/lazy";
import Func_AutoScrollThumbnails from "../KoorFunction/Func_YT-ThumbnailScroll";
import { FaYoutube } from "react-icons/fa6";

function Main_Youtube() {
  return (
    <div
      id="youtube"
      className="bg-[#ffb600] max-w-screen-xl flex flex-row justify-between items-center flex-wrap lg:flex-nowrap w-full"
    >
      <div className="rounded-xl border-4 border-white my-3 ml-3 overflow-hidden shrink-0 w-2xl">
        <ReactPlayer url="https://www.youtube.com/watch?v=saXzXq3lXnM" config={{ youtube: { playerVars: { controls: 1 } }}}/>
      </div>

      <div className="grid grid-cols-1 grid-rows-2 gap-1 mx-auto">
        <a
          href="https://www.youtube.com/@PureKoor"
          target="_blank" rel="noopener noreferrer"
          className="border-4 bg-red-600 rounded-xl flex w-3/4 h-3/4 m-auto"
        >
          <p className="text-6xl m-auto font-bold align-middle text-white align-right hover:underline flex">
            <FaYoutube className="mr-3"/>Subscribe!
          </p>
        </a>
        <Func_AutoScrollThumbnails />
      </div>
    </div>
  );
}

export default Main_Youtube;
