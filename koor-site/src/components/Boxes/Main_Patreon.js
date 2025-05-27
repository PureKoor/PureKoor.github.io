import { FaBluesky, FaYoutube, FaTelegram, FaPatreon } from "react-icons/fa6";

function Main_Patreon() {
  return (
    <div
      id="support"
      className="bg-[url('../public/assets/bg_box/pexels-eberhardgross-572897_mountains.webp')] max-w-screen-xl w-full bg-cover bg-bottom bg-no-repeat"
    >
      <div className="grid grid-cols-3 grid-rows-1 gap-5 flex-wrap w-full my-5">
        <div className="text-4xl inline text-white text-stroke-sm font-serif flex items-center align-middle h-full bg-black bg-opacity-25 ml-5">
          <div className="w-full">
            <div className="text-center">
              <p className="mx-3 my-1 text-7xl">$1 Perks</p>
              <p className="mx-3 my-1 text-3xl">Monthly tier</p>
            </div>
            <div className="row-start-3 row-span-3 col-span-full m-1 mt-5">
              <ul className="text-xl font-regular">
                <li>- BETTER DEAL THAN SOMNA CODE</li>
                <li>- Icon Bases</li>
                <li>- New Art</li>
                <li>- Tanuki Fella Avatar</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-5 mx-5">
          <div className="row-start-1">
            <p className="text-5xl font-regular text-center text-white text-stroke-sm font-serif ">
              Help Support My Work
            </p>
          </div>
          <a
            href="https://patreon.purekoor.com/"
            target="_blank" rel="noopener noreferrer"
            className="row-start-2 row-span-2 overflow-hidden"
          >
            <FaPatreon
              color="#black"
              className="m-auto h-full w-auto object-cover"
            />
          </a>
        </div>
        <div className="text-4xl text-white font-serif text-white text-stroke-sm font-serif  inline flex items-center align-middle h-full bg-black bg-opacity-25 mr-5">
          <div className="w-full">
            <div className="text-center">
              <p className="mx-3 my-1 text-7xl">$4 Perks</p>
              <p className="mx-3 my-1 text-3xl">Paw tier</p>
            </div>
            <div className="row-start-3 row-span-3 col-span-full m-1 mt-5">
              <ul className="text-xl font-regular font-serif text-white text-stroke-sm">
                <li>- Early Videos</li>
                <li>- Secret Info</li>
                <li>- Secret Info</li>
                <li>- Happy Koor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Patreon;
