import { Link } from 'react-scroll';

function Main_NavBar() {
  return (
    <div className="w-full">
      <div className="w-[110%] translate-x-[-5%] gap-3 md:gap-4 flex flex-wrap items-scretch justify-center">
        <Link
          to="video"
          smooth={true} duration={500} offset={-100}
          className="bg-[url('../public/assets/Buttons/pagebutton_video.webp')] bg-cover bg-center bg-no-repeat
                    lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4
                    transition-all hover:scale-x-110 hover:-translate-y-2 hover:border-[#ff0000] duration-450 ease-in-out"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm ">
            Video
          </span>
        </Link>
        <Link
          to="support"
          smooth={true} duration={500} offset={-100}
          className="bg-[url('../public/assets/Buttons/pagebutton_support.webp')] bg-cover bg-center bg-no-repeat
        lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4
        transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#00FF00] duration-450 ease-in-out"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Support
          </span>
        </Link>
        <Link
          to="iconbase"
          smooth={true} duration={500} offset={-100}
          className="bg-[url('../public/assets/Buttons/pagebutton_iconbase.webp')] bg-cover bg-center bg-no-repeat
        overflow-hidden min-w-20 lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4
        transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FFA500] duration-450 ease-in-out"
        >
          <span className="text-3xl lg:ml-0 -ml-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Icon Base
          </span>
        </Link>
        <Link
          to="art"
          smooth={true} duration={500}
          className="bg-[url('../public/assets/Buttons/pagebutton_art.webp')] bg-cover bg-center bg-no-repeat
        lg:basis-64 basis-16 h-16 rounded-lg font-serif text-3xl border-[#4c1a1e] border-4
        transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#FF00FF] duration-450 ease-in-out"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Artwork
          </span>
        </Link>
        <Link
          to="avatar"
          smooth={true} duration={500}
          className="bg-[url('../public/assets/Buttons/pagebutton_avatar.webp')] bg-cover bg-center bg-no-repeat
        lg:basis-64 basis-16 h-16 rounded-lg align-middle border-[#4c1a1e] border-4
        transition-transform hover:scale-x-110 hover:-translate-y-2 hover:border-[#00FFFF] duration-450 ease-in-out"
        >
          <span className="text-3xl lg:ml-0 -ml-1 mr-1 leading-loose font-serif align-middle text-left pl-2.5 text-white text-stroke-sm">
            Avatar
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Main_NavBar;
