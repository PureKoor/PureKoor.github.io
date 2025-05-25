import { FaPatreon } from "react-icons/fa6";


function Main_UmbraDeal () {
    return (
      <>
 {/* "text-2xl [writing-mode:vertical-lr] mt-3" ,  */}

                <div className="bg-[#ffb44a] min-h-[17rem] overflow-visible">
            <div className="flex flex-row justify-between gap-5 flex-wrap lg:flex-nowrap items-center mr-3">

<div className="grow shrink-0 grid grid-cols-5 grid-rows-2 gap-3 mt-3">
                <div className="col-span-full row-span-1">
                   <div className="text-white font-serif text-center">
                      <span className="text-6xl align-middle text-stroke-sm">
                        SITE UNDER CONSTRUCTION
                      </span>
                    <div className="row-span-3 col-span-3 mx-auto">
                      <span className="text-3xl text-center font-serif font-extrabold underline text-white text-stroke-sm">
                        Come back during: Furality Somna Jun 5th - 8th
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             <div className="md:m-auto mx-auto mb-3 grow-0 shrink-0 rounded-2xl border-4 bg-indigo-950 border-indigo-950 ">
                <a
                  href="https://patreon.com/purekoor"
                  className="h-32 w-32 flex mb-"
                >
                  <FaPatreon color="white" className="m-auto h-full w-2/3 object-cover"/>
                </a>
              </div>


                          </div>
          </div>
              </>
    );
}

export default Main_UmbraDeal;


