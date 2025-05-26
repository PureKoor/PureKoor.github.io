import { FaPatreon } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

function Main_TFYourSona() {
  return (
    <>
      <div id="iconbase" className="bg-[#ffb600] w-full">
        <h1 className="text-slate-50 font-serif text-6xl text-center text-stroke-sm mt-2">
          {" "}
          TRANSFORM YOUR SONA: ICON BASES
        </h1>
        <div className="flex gap-5 flex-wrap justify-center items-center md:flex-nowrap m-5">
          <div className="text-4xl grow-0 shrink inline text-white font-extrabold text-stroke-sm">
            <p className="">
              <span className="inline-block">
                Color in these PSD files to ʕ ᵔᴥᵔʔ✨
              </span>
              <span className="inline-block">make yourself a new icon or</span>
              <span className="inline-block">
                maybe find yourself a new species!
              </span>
            </p>
            <br />
            <p>
              <span className="inline-block">
                25% OFF Using Code "SOMNA" on many Packs
              </span>
              <span className="inline-block">Price: Free - $Max</span>
            </p>
            <p className="font-black text-4x1 underline">
              Check out my Shops:
              <a href="https://gumroad.purekoor.com/">
                <SiGumroad />
              </a>
              <a href="https://www.patreon.com/purekoor/shop">
                <FaPatreon />
              </a>
              <a href="https://purekoor.itch.io/">
                <FaItchIo />
              </a>
              <a href="https://kofi.purekoor.com/">
                <SiKofi />
              </a>
            </p>
          </div>
          <div className="grow-0">
            <div className="grid grid-rows- grid-cols-4 gap-3 w-80 h-60">
              <a
                href="https://purekoor.gumroad.com/"
                className="border-4 rounded-xl border-white row-start-2 row-end-4 col-start-3 col-end-5"
              >
                <img
                  loading="lazy"
                  className="h-full object-cover"
                  src="assets/base_2.PNG"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-rows-3 grid-cols-3 gap-3 w-60 h-60 shrink-0">
            <div className="h-full w-full border-4 rounded-xl border-white overflow-hidden">
              <img
                loading="lazy"
                className="m-auto h-full w-full object-cover"
                src="assets/Color_Tf_Series_Part_2(1).png"
              />
            </div>
            <div className="h-full w-full border-4 rounded-xl border-white overflow-hidden">
              <img
                loading="lazy"
                className="m-auto h-full w-full object-cover"
                src="assets/Color_Tf_Series_Part_2 (1).png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_TFYourSona;
