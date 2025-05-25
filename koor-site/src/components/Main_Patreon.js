
import { FaBluesky, FaYoutube, FaTelegram,FaPatreon   } from "react-icons/fa6";

function Main_Patreon () {
    return (
         <div id="Patreon" className="bg-[url('../public/assets/Patreon_FW_2021Apr29_NierReplicant_TXless_HiRes.png')] max-w-screen-xl  w-full bg-cover bg-top bg-no-repeat">
          <div className="flex flex-row justify-between items-start gap-5 my-5 flex-wrap w-full">
            <div className="shrink-0 grow-0 grid grid-cols-2 grid-rows-2 h-80 w-80 gap-5 mx-5">
              <a href="https://patreon.purekoor.com/" className="border-4 rounded-xl border-white bg-white overflow-hidden">
                    <FaPatreon  color="#black" className="m-auto h-full w-full object-cover"/>
              </a>
            </div>
            <div className="grow-0 shrink-0 text-4xl text-white font-serif bg-black bg-opacity-25 inline">
              <p className="mx-3 my-1">$1 Person Monthly Tip</p>
              <p className="mx-3 my-1">$4 Perks Paw Tier</p>
              <p className="mx-3 my-1"></p>
            </div>

            <div className="row-start-3 row-span-3 col-span-full ml-10">
              <ul className="text-xl font-regular font-serif text-white text-stroke-sm">
                <li>- Early Videos</li>
                <li>- Secret Info</li>
                <li>- Secret Info</li>
                <li>- Happy Koor</li>
              </ul>
            </div>

            <div className="row-start-3 row-span-3 col-span-full ml-10">
              <ul className="text-xl font-regular font-serif text-white text-stroke-sm">
                <li>- BETTER DEAL THAN SOMNA CODE</li>
                <li>- Icon Bases</li>
                <li>- New Art</li>
                <li>- Tanuki Fella Avatar</li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Main_Patreon;