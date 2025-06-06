import { FaBluesky, FaYoutube, FaTelegram, FaPatreon } from "react-icons/fa6";

function Main_Artwork() {
  return (
    <div
      id="art"
      className="bg-[url('../public/assets/bg_box/IMG_ArtBG.png')] max-w-screen-xl  w-full bg-cover bg-top bg-no-repeat"
    >
      <div className="grid grid-cols-2 grid-rows-1 gap-5 my-5 w-full">
        <div className="col-start-1 col-span-1 flex flex-col">
          <div className="grow-0 shrink-0 text-5xl font-serif text-center inline stroke-[#2e002c] text-white text-stroke-sm">
            <p>View My Art</p>
          </div>
          <div className="mt-5">
            <div className="shrink-0 grow-0 grid grid-cols-3 grid-rows-1 gap-5 mx-5 w-full">
              <a
                href="https://bsky.app/profile/purekoor.art/feed/aaaauebqu3eqq"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 rounded-xl border-dotted border-[#2e002c] bg-transparent overflow-hidden opacity-80
                transition-all hover:-translate-y-2 hover:border-[#010b38] hover:bg-[#010b38] hover:bg-opacity-50 hover:border-opacity-70 duration-300 ease-in-out hover:opacity-100"
              >
                <FaBluesky
                  color="#2e002c"
                  className="m-4 h-5/6 w-5/6 object-cover hover:fill-[#25C5DF]"
                />
              </a>
              <a
                href="https://www.youtube.com/@PureKoor/community"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 rounded-xl border-dotted border-[#2e002c] bg-transparent overflow-hidden opacity-80
                transition-all hover:-translate-y-2 hover:border-[#52072a] hover:bg-[#ffd5a6] hover:bg-opacity-60 hover:border-opacity-70 duration-300 ease-in-out hover:opacity-100"
              >
                <FaYoutube
                  color="#2e002c"
                  className="m-4 h-5/6 w-5/6 object-cover hover:fill-[#CD201F]"
                />
              </a>
              <a
                href="https://t.purekoor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 rounded-xl border-dotted border-[#2e002c] bg-transparent overflow-hidden opacity-80
                transition-all hover:-translate-y-2 hover:border-[#010b38] hover:bg-[#010b38] hover:border-opacity-70 hover:bg-opacity-50 duration-300 ease-in-out hover:opacity-100"
              >
                <FaTelegram
                  color="#2e002c"
                  className="m-4 h-5/6 w-5/6 object-cover hover:fill-[#0088cc]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Artwork;
