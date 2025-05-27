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

          <div className="grow shrink-0 grid grid-cols-5 grid-rows-3 h-full gap-3 mt-5">
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

          <div className="grow shrink-0 grid grid-cols-2 grid-rows-3 h-full gap-3 mr-10 my-3">
            <div className="my-auto col-span-2">
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm">
                Available on
              </p>
            </div>
            <a
              href="https://purekoor.gumroad.com/"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <SiGumroad
                className="m-auto h-full w-full object-cover fill-fuchsia-900 hover:fill-fuchsia-700 hover:scale-110 transition duration-300"
              />
            </a>
            <a
              href="https://www.patreon.com/c/purekoor/shop"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <FaPatreon
                className="m-auto h-full w-full object-cover fill-fuchsia-900 hover:fill-fuchsia-700 hover:scale-110 transition duration-300"
              />
            </a>
            <a
              href="https://purekoor.itch.io/"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <FaItchIo
                className="m-auto h-full w-full object-cover fill-fuchsia-900 hover:fill-fuchsia-700 hover:scale-110 transition duration-300"
              />
            </a>
            <a
              href="https://ko-fi.com/purekoor/shop"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <SiKofi
                className="m-auto h-full w-full object-cover fill-fuchsia-900 hover:fill-fuchsia-700 hover:scale-110 transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_Tanuki;
