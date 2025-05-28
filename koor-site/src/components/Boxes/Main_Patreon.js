import { FaBluesky, FaYoutube, FaTelegram, FaPatreon } from "react-icons/fa6";

function Main_Patreon() {
  return (
    <div
      id="support"
      className="bg-[url('../public/assets/bg_box/pexels-eberhardgross-572897_mountains.webp')] max-w-screen-xl w-full bg-cover bg-bottom bg-no-repeat"
    >
      <div className="grid grid-cols-3 grid-rows-1 gap-5 flex-wrap w-full my-5">
        <a
          href="https://www.patreon.com/purekoor/membership"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="text-4xl inline text-white text-stroke-sm font-serif flex items-center align-middle h-full bg-[#4d0000] bg-opacity-25 ml-5 rounded-3xl
          hover:bg-[#0e5096] duration-150 hover:bg-opacity-65 transition-all ease-out hover:scale-105 "
          >
            <div className="w-full">
              <div className="text-center">
                <p className="mx-3 my-1 text-7xl">$1 Perks</p>
                <p className="mx-3 my-1 text-3xl">Monthly Tip</p>
              </div>
              <div className="row-start-3 row-span-3 col-span-full m-1 mt-5">
                <ul className="text-xl font-regular text-right">
                  <li>Your Name In The Youtube Credits -</li>
                  <li>Early Videos -</li>
                  <li>Secret Info -</li>
                  <li>Happy Koor -</li>
                </ul>
              </div>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-1 grid-rows-3 gap-5 mx-5">
          <div className="row-start-1">
            <a
              href="https://patreon.purekoor.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-5xl font-regular text-center text-white text-stroke-sm font-serif ">
                Help Support My Work
              </p>
            </a>
          </div>
          <a
            href="https://patreon.purekoor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="row-start-2 row-span-2 overflow-hidden"
          >
            <FaPatreon
              className="m-auto h-full w-auto object-cover text-white text-stroke-sm 
              transition-transform hover:scale-90 hover:border-[#ff0000] duration-300 ease-out"
            />
          </a>
        </div>
        <a
          href="https://www.patreon.com/purekoor/membership"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="text-4xl text-white font-serif text-white text-stroke-sm font-serif  inline flex items-center align-middle h-full bg-[#4d0000] bg-opacity-25 mr-5 rounded-3xl
         hover:bg-[#027521] duration-150 hover:bg-opacity-65 transition-all ease-out hover:scale-105"
          >
            <div className="w-full">
              <div className="text-center">
                <p className="mx-3 my-1 text-7xl">$4 Perks</p>
                <p className="mx-3 my-1 text-3xl">Paw Tier</p>
              </div>
              <div className="row-start-3 row-span-3 col-span-full m-1 mt-5">
                <ul className="text-xl font-regular font-serif text-white text-stroke-sm">
                  <li>- BETTER DEAL THAN SOMNA CODE</li>
                  <li>- Icon Bases</li>
                  <li>- New Art</li>
                  <li>- Tanuki Fella Avatar</li>
                </ul>
              </div>
            </div>
          </div>
        </a>
        <div
          className="row-start-2 col-start-2 border-2 border-double rounded-3xl border-[#d98200] bg-[#4d0000] bg-opacity-50 m-1
        hover:bg-[#FF0000] duration-150 hover:bg-opacity-65 transition-all ease-out hover:scale-105"
        >
          <a
            href="https://www.patreon.com/purekoor/gift/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl font-regular text-center text-white text-stroke-sm font-serif my-1 ">
              GIFT A TIER TO YOUR FRIENDS!!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main_Patreon;
