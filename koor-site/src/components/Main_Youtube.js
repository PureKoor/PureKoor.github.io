import Ad_YoutubePlayer from "./Ad_YoutubePlayer";


function Main_Youtube () {
    return (
         <div id="video" className="bg-[#ffb44a] max-w-screen-xl flex flex-row justify-between h-full items-center gap-5 flex-wrap lg:flex-nowrap w-full">
        
         <div className="rounded-xl border-4 border-white m-3 overflow-hidden shrink-0  mx-auto">
            <Ad_YoutubePlayer vidHeight="1920" vidWidth='1080'/>
        </div>
           
          <div className="grid grid-cols-2 grid-rows-5 gap-1  mx-auto">
            <a
              href="https://www.youtube.com/@PureKoor"
              className="col-start-1 col-end-2 row-start-1 border-4 bg-red-600 rounded-xl "
            >
                
              <p className="text-2xl text-center font-bold text-white align-middle hover:underline">
                Subscribe!
              </p>
            </a>
            <a
              href="https://www.tiktok.com/@purekoor"
              className="col-start-2 col-end-3 row-start-1 border-4 bg-black rounded-xl"
            >
              <p className="text-2xl text-center font-bold text-white align-middle hover:underline">
                Follow!
              </p>
            </a>
            <div className="my-auto row-start-2 col-span-full ml-5 -mr-5">
              <p className="my-auto text-2xl font-regular font-serif text-white text-stroke-sm">
                $1.00 on Patreon for name in credits!
              </p>
            </div>
            <div className="row-start-3 row-span-3 col-span-full ml-10">
              <ul className="text-xl font-regular font-serif text-white text-stroke-sm">
                <li>- Art Tutorials</li>
                <li>- Furry Fandom Analysis</li>
                <li>- Video Game Discussions</li>
                <li>- Stuff I find interesting</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-3 m-3 shrink-0 mx-auto">
            <a
              href="https://www.tiktok.com/@purekoor/video/7277822528410733867"
              className="border-4 border-white rounded overflow-hidden"
            >
              <img loading="lazy"
                className="object-scale-down h-60"
                src="assets/tiktok_example_1_lowres.jpg"
              />
            </a>
            <a
              href="https://www.tiktok.com/@purekoor/video/7306872891331743022"
              className="border-4 border-white rounded overflow-hidden"
            >
              <img loading="lazy"
                className="object-scale-down h-60"
                src="assets/tiktok_example_2_lowres.jpg"
              />
            </a>
          </div>
        </div>
    );
}

export default Main_Youtube;
      


