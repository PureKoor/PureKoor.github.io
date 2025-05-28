import { FaPatreon } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

import { useEffect, useState } from "react";

const images = [
  "bg-[url('../public/assets/Color_Tf_Series_1.png')]",
  "bg-[url('../public/assets/Color_Tf_Series_2.png')]",
  "bg-[url('../public/assets/Color_Tf_Series_3.png')]",
];

function Main_TFYourSona() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="iconbase" className="bg-[#ffb600] w-full">
        <h1 className="text-slate-50 font-serif text-6xl text-center text-stroke-sm mt-2">
          {" "}
          TRANSFORM YOUR SONA: ICON BASES
        </h1>
        <div className="grid grid-rows-1 grid-cols-3 gap-5 items-center m-5">
          <div className="text-4xl col-start-1 grow-0 shrink inline text-white font-extrabold text-stroke-sm">
            <p>
              <span className="inline-block">
                25% OFF Using Code "SOMNA" on many Packs
              </span>
              <span className="inline-block">Price: Free - $Max</span>
            </p>
          </div>
          <div className="col-start-2 flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 h-full gap-3 my-3">
              <div className="my-auto col-span-2">
                <p className="text-3xl text-center font-extrabold text-white text-stroke-sm">
                  Available on
                </p>
              </div>
              <a
                href="https://purekoor.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl h-20 w-20 m-auto"
              >
                <SiGumroad
                  className="m-auto h-full w-full object-cover fill-[#540051] hover:fill-fuchsia-700 
                transition-all  hover:scale-125 hover:-translate-y-2"
                />
              </a>
              <a
                href="https://www.patreon.com/c/purekoor/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl h-20 w-20 m-auto"
              >
                <FaPatreon
                  className="m-auto h-full w-full object-cover fill-[#540051] hover:fill-fuchsia-700
              transition-all  hover:scale-125 hover:-translate-y-2"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 col-start-3 w-96 h-64 gap-3">
            <div className="relative w-full h-full m-auto col-start-3 row-start-1 border-4 rounded-xl border-white overflow-hidden">
              {images.map((bgClass, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    (i + 0) % 3 === current ? "opacity-100" : "opacity-0"
                  } ${bgClass} bg-cover bg-center`}
                />
              ))}
            </div>
            <div className="relative w-full h-full m-auto col-start-3 row-start-2 border-4 rounded-xl border-white overflow-hidden">
              {images.map((bgClass, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    (i + 1) % 3 === current ? "opacity-100" : "opacity-0"
                  } ${bgClass} bg-cover bg-center`}
                />
              ))}
            </div>
            <div className="relative w-full h-full m-auto col-start-1 col-span-2 row-start-1 row-span-2 border-4 rounded-xl border-white overflow-hidden">
              {images.map((bgClass, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    (i + 2) % 3 === current ? "opacity-100" : "opacity-0"
                  } ${bgClass} bg-cover bg-center`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_TFYourSona;
