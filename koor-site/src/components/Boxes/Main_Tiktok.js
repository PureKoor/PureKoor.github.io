import Ad_TikTokPlayer from "../KoorFunction/Ad_TiktokPlayer";

function Main_Tiktok() {
  return (
    <div
      id="tiktok"
      className="bg-[#ffb600] max-w-screen-xl flex flex-row justify-between h-full items-center gap-5 flex-wrap lg:flex-nowrap w-full"
    >
      <div className="grid grid-cols-2 grid-rows-5 gap-1  mx-auto">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          {/* Fear No More Tiktok */}
          <Ad_TikTokPlayer videoId="7306872891331743022" />
        </div>

        <a
          href="https://www.tiktok.com/@purekoor"
          className="col-start-2 col-end-3 row-start-1 border-4 bg-black rounded-xl"
        >
          <p className="text-2xl text-center font-bold text-white align-middle hover:underline">
            Follow!
          </p>
        </a>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-3 m-3 shrink-0 mx-auto">
        <a
          href="https://www.tiktok.com/@purekoor/video/7277822528410733867"
          className="border-4 border-white rounded overflow-hidden"
        >
          <img
            loading="lazy"
            className="object-scale-down h-60"
            src="assets/tiktok_example_1_lowres.jpg"
          />
        </a>
        <a
          href="https://www.tiktok.com/@purekoor/video/7306872891331743022"
          className="border-4 border-white rounded overflow-hidden"
        >
          <img
            loading="lazy"
            className="object-scale-down h-60"
            src="assets/tiktok_example_2_lowres.jpg"
          />
        </a>
      </div>
    </div>
  );
}

export default Main_Tiktok;
