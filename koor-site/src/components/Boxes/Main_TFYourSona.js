import { FaPatreon } from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

import { useEffect, useState } from "react";

const images = [
  "bg-[url('../public/assets/PureKoorBases/PureKoorBase_NoodleDragon.webp')]",
  "bg-[url('../public/assets/PureKoorBases/TF2Base_Giraffe.webp')]",
  "bg-[url('../public/assets/PureKoorBases/TF2Base_Cow.webp')]",
  "bg-[url('../public/assets/PureKoorBases/PureKoorBase_Roo.webp')]",
  "bg-[url('../public/assets/PureKoorBases/PureKoorBase_Tiger.webp')]",
  "bg-[url('../public/assets/PureKoorBases/PureKoorBase_Dino.webp')]",
  "bg-[url('../public/assets/PureKoorBases/TF2Base_Tiger.webp')]",
  "bg-[url('../public/assets/PureKoorBases/PureKoorBase_Bear.webp')]",
];

function Main_TFYourSona() {
  const [current, setCurrent] = useState(0);
  const numOfImgs = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="iconbase"
        className="bg-[#ffb600] w-full
      bg-[url('../public/assets/bg_box/pexels-ignacio-pales-407380-2877375.webp')] max-w-screen-xl w-full bg-cover bg-bottom bg-no-repeat"
      >
        <h1
          className="text-slate-50 font-serif text-6xl text-center text-stroke-sm mt-2
        hover:underline transition-transform hover:scale-110 hover:translate-y-2 duration-50 ease-in"
        >
          <a
            href="https://www.patreon.com/c/purekoor/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl h-20 w-20 m-auto"
          >
            {" "}
            TRANSFORM YOUR SONA: ICON BASES
          </a>
        </h1>
        <div className="grid grid-rows-1 grid-cols-3 gap-5 items-center m-5">
          <div
            className="text-center pl-12 text-6xl col-start-1 grow-0 shrink inline text-white font-extrabold text-stroke-sm
         transition-transform hover:scale-105 hover:-translate-y-2 duration-50 ease-in"
          >
            <p className>
              <a
                href="https://www.patreon.com/c/purekoor/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl h-20 w-20 m-auto"
              >
                <span className="inline-block text-4xl">Use Code</span>
                <span className="inline-block text-8x1 pt-4">"SOMNA"</span>
                <span className="inline-block text-4xl">
                  for 25% Select Packs
                </span>
                <span className="inline-block text-2xl text-[#eb812a]">
                  Ends June 11th
                </span>
                <span className="inline-block"></span>
              </a>
            </p>
          </div>
          <div className="col-start-2 flex flex-col items-center justify-center">
            <div className="grow grid grid-cols-2 grid-rows-3 h-full gap-5 mr-16 my-3">
              <div className="my-auto col-span-2">
                <p className="text-4xl text-center font-extrabold text-white text-stroke-sm">
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
                  className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#00cf83]
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
                  className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#00cf83]
              transition-all  hover:scale-125 hover:-translate-y-2"
                />
              </a>
              <a
                href="https://purekoor.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl h-20 w-20 m-auto"
              >
                <FaItchIo
                  className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#00cf83]
              transition-all  hover:scale-125 hover:translate-y-2"
                />
              </a>
              <a
                href="https://ko-fi.com/purekoor/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl h-20 w-20 m-auto"
              >
                <SiKofi
                  className="m-auto h-full w-full object-cover fill-[#FFFFFF] hover:fill-[#00cf83]
              transition-all  hover:scale-125 hover:translate-y-2"
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
                    (i + 0) % numOfImgs === current
                      ? "opacity-100"
                      : "opacity-0"
                  } ${bgClass} bg-cover bg-center`}
                />
              ))}
            </div>
            <div className="relative w-full h-full m-auto col-start-3 row-start-2 border-4 rounded-xl border-white overflow-hidden">
              {images.map((bgClass, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    (i + 1) % numOfImgs === current
                      ? "opacity-100"
                      : "opacity-0"
                  } ${bgClass} bg-cover bg-center`}
                />
              ))}
            </div>
            <div className="relative w-full h-full m-auto col-start-1 col-span-2 row-start-1 row-span-2 border-4 rounded-xl border-white overflow-hidden">
              {images.map((bgClass, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    (i + 2) % numOfImgs === current
                      ? "opacity-100"
                      : "opacity-0"
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
