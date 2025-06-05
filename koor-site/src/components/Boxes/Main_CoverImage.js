import LazyImage from '../LazyImage.js'

function Main_CoverImage() {
  return <LazyImage
  src="assets/Somna/Logo_PureKoorSomna.PNG"
  placeholder="assets/Somna/Logo_PureKoorSomnaLQ.PNG"
  alt="Nice image"
  className="max-w-7xl h-full"
/>
}

export default Main_CoverImage;
