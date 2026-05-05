function Main_FWA26_Panel() {
  return (
    <div
      className="max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 items-center w-full
      bg-[url('../public/assets/bg_box/pexels-jplenio-1423600.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="rounded-xl border-4 border-white mt-3 mb-1 mx-3 lg:my-3 lg:mr-0 overflow-hidden">
                <a
          href="https://builder.guidebook.com/g/#/guides/furryweekend2026/schedule/sessions/32501270"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img
          src="/assets/FWA26_Panel.webp"
          alt="FWA 2026"
          className="w-full h-auto block"
          loading="lazy"
        /></a>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 gap-3 px-3 pb-3 pt-1 lg:p-3 gap-y-3 lg:gap-y-10">
        <a
          href="https://www.youtube.com/shorts/dnx6GPyKrxc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-center text-white text-stroke-sm font-serif inline-flex items-center justify-center align-middle h-full bg-[#4d0000] bg-opacity-25 md:mr-5 rounded-3xl px-4 py-4
         hover:bg-[#027521] duration-150 hover:bg-opacity-65 transition-all ease-out hover:scale-105"
        >
          More Info Here!
        </a>
        <a
          href="https://builder.guidebook.com/g/#/guides/furryweekend2026/schedule/sessions/32501270"
          className="text-5xl text-center text-white text-stroke-sm font-serif inline-flex items-center justify-center align-middle h-full bg-[#4d0000] bg-opacity-25 md:mr-5 rounded-3xl px-4 py-3
         hover:bg-[#027521] duration-150 hover:bg-opacity-65 transition-all ease-out hover:scale-105"
        >
          Add to Schedule!
        </a>
      </div>
    </div>
  );
}

export default Main_FWA26_Panel;