import { FaPatreon } from "react-icons/fa6";
import { GiPawPrint } from "react-icons/gi";

function Main_AFC2025() {
  return (
    <>
      {/* "text-2xl [writing-mode:vertical-lr] mt-3" ,  */}

      <div className="bg-[#ffb600] overflow-visible">
        <div className="flex flex-row justify-between gap-5 flex-wrap lg:flex-nowrap items-center lg:mr-3">
          <div className="grow min-w-0 grid grid-cols-5 grid-rows-1 gap-3 mt-3">
            <div className="col-span-full row-span-1">
              <div className="text-white font-serif text-center">
                <div className="transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out pb-1">
                  <span className="text-2xl lg:text-4xl align-middle text-stroke-sm">
                    <a
                      href="https://furality.online/explore/dealers?id=831"
                      aria-label="Furality Booth #831"
                    >
                      Find Me @ AFC 2025
                    </a>
                  </span>
                </div>

                <div
                  className="row-span-3 col-span-3 mx-auto
                transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out"
                >
                  <span className="text-2xl lg:text-4xl text-center text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=community-showcase"
                      aria-label="Furality Somna Community Showcase"
                    >
                      Creating Your Artstyle: Where To Begin?
                    </a>
                  </span>
                </div>
                <div className="row-span-3 col-span-3 mx-auto pb-5">
                  <span className="text-2xl text-center text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=community-showcase"
                      aria-label="Furality Somna Community Showcase"
                    >
                      Friday Sept 19th, Begins 2PM @ on Second Floor in Panel
                      Room 1
                    </a>
                  </span>
                </div>

                <div
                  className="row-span-3 col-span-3 mx-auto
                transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out"
                >
                  <span className="text-2xl lg:text-4xl text-center text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=lobby"
                      aria-label="Furality Somna Lobby"
                    >
                      TF Meet N' Greet
                    </a>
                  </span>
                </div>
                <div className="row-span-3 col-span-3 mx-auto pb-6">
                  <span className="text-2xl text-center text-stroke-sm">
                    <a
                      href="https://furality.online/event?id=lobby"
                      aria-label="Furality Somna Lobby"
                    >
                      Saturday Sept 20th, From 9PM - 10PM on First Floor in
                      Meetup Room 1
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-auto mb-20 grow-0 shrink-0 rounded-2xl border-4 lg:mr-7 lg:-ml-7
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

export default Main_AFC2025;
