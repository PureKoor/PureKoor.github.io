import { FaPatreon } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

function Main_Tanuki() {
  return (
    <>
      <div id="avatar" className="bg-[#ffb600] w-full">
        <div className="flex flex-row justify-between gap-5 flex-wrap lg:flex-nowrap items-center">
          <a
            href="https://purekoor.gumroad.com/"
            className="mx-auto md:mx-3 md:mt-0 mt-3"
          >
            <img
              loading="lazy"
              className="h-72"
              src="assets/TanukiFellaSpin.webp"
            />
          </a>

          <div className="grow shrink-0 grid grid-cols-5 grid-rows-3 h-full gap-3 mb-5 mt-2">
            <div className="col-span-full row-span-1 my-auto">
              <div className="text-white font-serif text-center">
                <p className="text-6xl align-middle text-stroke-sm hover:underline">
                  <a href="https://purekoor.gumroad.com/">TANUKI FELLA</a>
                </p>
                <p className="text-3xl align-middle text-stroke-sm">
                  My First Ever Avatar
                </p>
              </div>
            </div>
            {/* <div className="col-start-3 row-start-2 rounded-full h-24 w-24 border-4 mx-auto border-[#4c1a1e]"></div>
              <div className="col-start-1 row-start-2 rounded-full h-24 w-24 border-4 mx-auto border-[#4c1a1e]"></div>
              <div className="col-start-2 row-start-2 rounded-full h-24 w-24 border-4 mx-auto border-[#4c1a1e]"></div>
              <div className="col-start-1 row-start-3 rounded-full h-24 w-24 border-4 mx-auto border-[#4c1a1e]"></div>
              <div className="col-start-2 row-start-3 rounded-full h-24 w-24 border-4 mx-auto border-[#4c1a1e]"></div>
              <div className="col-start-3 row-start-3 rounded-full h-24 w-24 border-4 mx-auto border-[#4c1a1e]"></div> */}

            <div className="row-span-2 col-span-full h-32 my-auto">
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm">
                Made for VRChat
              </p>
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm">
                Quest Compatible
              </p>
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm underline">
                <a href="https://furality.online/explore/dealers?id=304">
                  Get it for free at Furality Somna Booth #831
                </a>
              </p>
            </div>
          </div>

          <div className="grow shrink-0 grid grid-cols-1 grid-rows-3 h-full gap-3 mr-3 mb-3">
            <div className="my-auto">
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm">
                Available on
              </p>
            </div>
            <a
              href="https://purekoor.gumroad.com/"
              className="rounded-2xl border-4 h-20 w-20 mx-auto border-[#4c1a1e] overflow-hidden"
            >
              <SiGumroad
                color="purple"
                className="m-auto h-full w-full object-cover"
              />
            </a>
            <a
              href="https://www.patreon.com/c/purekoor/shop"
              className="rounded-2xl border-4 h-20 w-20 mx-auto border-[#4c1a1e] overflow-hidden"
            >
              <FaPatreon
                color="purple"
                className="m-auto h-full w-full object-cover"
              />
            </a>
            <a
              href="https://purekoor.itch.io/"
              className="rounded-2xl border-4 h-20 w-20 mx-auto border-[#4c1a1e] overflow-hidden"
            >
              <FaItchIo
                color="purple"
                className="m-auto h-full w-full object-cover"
              />
            </a>
            <a
              href="https://ko-fi.com/purekoor/shop"
              className="rounded-2xl border-4 h-20 w-20 mx-auto border-[#4c1a1e] overflow-hidden"
            >
              <SiKofi
                color="purple"
                className="m-auto h-full w-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_Tanuki;
