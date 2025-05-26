
function Main_FootBar () {
    return (
         <>
<div className="max-w-screen-xl w-full">
          <div className="grid w-2/3 grid-rows-2 grid-cols-1 mx-auto gap-1">
            <div className="text-right m-auto mb-1 font-bold text-white">
            <a className="underline" href="/links">All Websites</a> • <a className="underline" href="mailto:contact@purekoor.com">contact@purekoor.com</a>
            </div>
            <div className="col-span-full mx-auto flex items-center gap-2 mb-4">
              <img loading="lazy" className="h-8 object-scale-down" src="assets/logo.png" />
              <span className="text-xl text-center font-bold text-white text-stroke-sm">
                PureKoor '25
              </span>
            </div>
          </div>
        </div>
</>
    );
}

export default Main_FootBar;



