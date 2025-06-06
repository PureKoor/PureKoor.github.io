import { FaPatreon } from "react-icons/fa6";
import { GiPawPrint } from "react-icons/gi";

function Main_SomnaDeal() {
  return (
    <>
      {/* "text-2xl [writing-mode:vertical-lr] mt-3" ,  */}

      <div className="bg-[#ffb600] overflow-visible">
        <div className="flex flex-row justify-between gap-5 flex-wrap lg:flex-nowrap items-center mr-3">
          <div className="grow shrink-0 grid grid-cols-5 grid-rows-1 gap-3 mt-3 ">
            <div className="col-span-full row-span-1">
              <div className="text-white font-serif text-center">
                <div className="transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out pb-1">
                  <span className="text-4xl align-middle text-stroke-sm ">
                    <a
                      href="https://furality.online/explore/dealers?id=831"
                      alt="Furality Booth #831"
                    >
                      Somna Furality Booth #831
                    </a>
                  </span>
                </div>
                <div className="row-span-3 col-span-3 mx-auto pb-1">
                  <span className="text-2xl text-center font-arial text-white text-stroke-sm">
                    <a
                      href="https://furality.online/explore/dealers?id=831"
                      alt="Furality Booth #831"
                    >
                      Found At The 2D Illustrations - Middle Pavilion
                    </a>
                  </span>
                </div>
                <div className="row-span-3 col-span-3 mx-auto pb-5">
                  <span className="text-2xl text-center font-arial text-blue text-stroke-sm">
                    <a
                      href="https://furality.online/explore/dealers?id=831"
                      alt="Furality Booth #831"
                    >
                      BOOKMARK MY BOOTH VIA THE FURALITY DEALER'S DEN EXPLORER!
                    </a>
                  </span>
                </div>

                <div
                  className="row-span-3 col-span-3 mx-auto
                transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out"
                >
                  <span className="text-4xl text-center font-arial text-blue text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=community-showcase"
                      alt="Furality Somna Community Showcase"
                    >
                      Watch Somna's Community Showcase
                    </a>
                  </span>
                </div>
                <div className="row-span-3 col-span-3 mx-auto pb-5">
                  <span className="text-2xl text-center font-arial text-blue text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=community-showcase"
                      alt="Furality Somna Community Showcase"
                    >
                      5 pm PDT / 8 pm EDT / 12 am UTC
                    </a>
                  </span>
                </div>

                <div
                  className="row-span-3 col-span-3 mx-auto
                transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out"
                >
                  <span className="text-4xl text-center font-arial text-blue text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=lobby"
                      alt="Furality Somna Lobby"
                    >
                      New Art To See In Somna's Lobby
                    </a>
                  </span>
                </div>
                <div className="row-span-3 col-span-3 mx-auto pb-6">
                  <span className="text-2xl text-center font-arial text-blue text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=lobby"
                      alt="Furality Somna Lobby"
                    >
                      Locationed Somewhere in the lobby...
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-auto mb-20 grow-0 shrink-0 rounded-2xl border-4 mr-7 -ml-7
          transition-transform hover:scale-y-110 hover:-translate-y-4 overflow-hidden duration-450 ease-in-out"
          >
            <a
              href="https://furality.online/explore/dealers?id=831"
              className="h-50 w-80 flex"
            >
              <img
                src="/assets/Somna/img_Booth831.webp"
                alt="Furality Somna June 5th through the 8th"
                width="453"
                height="801"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_SomnaDeal;
