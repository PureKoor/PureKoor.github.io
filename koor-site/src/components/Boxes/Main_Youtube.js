import Ad_YoutubePlayer from "../KoorFunction/Ad_YoutubePlayer";
import Func_AutoScrollThumbnails from "../KoorFunction/Func_YT-ThumbnailScroll";

function Main_Youtube() {
  return (
    <div
      id="youtube"
      className="bg-[#ffb600] max-w-screen-xl flex flex-row justify-between h-full items-center gap-5 flex-wrap lg:flex-nowrap w-full"
    >
      <div className="rounded-xl border-4 border-white m-3 overflow-hidden shrink-0  mx-auto">
        <Ad_YoutubePlayer vidHeight="1920" vidWidth="1080" />
      </div>

      <div className="grid grid-cols-2 grid-rows-5 gap-1  mx-auto">
        <a
          href="https://www.youtube.com/@PureKoor"
          className="col-start-1 col-end-2 row-start-1 border-4 bg-red-600 rounded-xl "
        >
          <p className="text-2xl text-center font-bold text-white align-right hover:underline">
            Subscribe!
          </p>
        </a>

        <div className="row-start-3 row-span-3 col-span-full ml-10">
          <ul className="text-xl font-regular font-serif text-white text-stroke-sm">
            <li>- Art Tutorials</li>
            <li>- Furry Fandom Analysis</li>
            <li>- Video Game Discussions</li>
            <li>- Stuff I find interesting</li>
          </ul>
        </div>
      </div>
      <Func_AutoScrollThumbnails />
    </div>
  );
}

export default Main_Youtube;
