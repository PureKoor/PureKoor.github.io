import { FaPatreon } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

function Main_Tanuki() {
  return (
    <>
      <div id="avatar" className="bg-[#ffb600] w-full">
        <div
          className="flex flex-row justify-between gap-5 flex-wrap items-center
        bg-[url('../public/assets/bg_box/pexels-eberhardgross-1367192.webp')] max-w-screen-xl w-full bg-cover bg-bottom bg-no-repeat"
        >
          <div className="w-full md:w-auto md:mx-3 my-3 flex mx-auto justify-center">
            <img
              loading="lazy"
              alt="Spinning tanuki animation"
              className="h-72 transition-all brightness-95 hover:brightness-110 hover:scale-110 select-none duration-750 ease-in-out active:scale-x-[-1]"
              src="assets/TanukiFellaSpin.webp"
            />
          </div>

          <div className="grow min-w-0 flex flex-col justify-center gap-3 my-3">
            <div className="text-white font-serif text-center">
              <p className="text-3xl lg:text-6xl align-middle text-stroke-sm hover:underline transition-transform hover:scale-110 hover:-translate-y-2 duration-50 ease-in">
                <a
                  href="https://www.patreon.com/purekoor/shop/tanuki-fella-avatar-support-ver-1-1-229840"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TANUKI FELLA
                </a>
              </p>
              <p className="text-3xl align-middle text-stroke-sm">
                My First Ever Avatar
              </p>
            </div>

            <div>
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm">
                Made for VRChat
              </p>
              <p className="text-2xl text-center font-extrabold text-white text-stroke-sm">
                Quest & PC Compatible
              </p>
            </div>
          </div>

          <div className="grow shrink-0 grid grid-cols-2 grid-rows-3 h-full gap-3 lg:mr-10 my-3">
            <div className="my-auto col-span-2">
              <p className="text-4xl text-center font-extrabold text-white text-stroke-sm">
                Available on
              </p>
            </div>
            <a
              href="https://purekoor.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PureKoor's Gumroad"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <SiGumroad
                className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#fa2f76]
                transition-all  hover:scale-125 hover:-translate-y-2"
              />
            </a>
            <a
              href="https://www.patreon.com/c/purekoor/shop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PureKoor's Patreon"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <FaPatreon
                className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#fa2f76]
              transition-all  hover:scale-125 hover:-translate-y-2"
              />
            </a>
            <a
              href="https://purekoor.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PureKoor's Itch.io"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <FaItchIo
                className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#fa2f76]
              transition-all  hover:scale-125 hover:translate-y-2"
              />
            </a>
            <a
              href="https://ko-fi.com/purekoor/shop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PureKoor's KoFi"
              className="rounded-2xl h-20 w-20 m-auto"
            >
              <SiKofi
                className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#fa2f76]
              transition-all  hover:scale-125 hover:translate-y-2"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_Tanuki;
