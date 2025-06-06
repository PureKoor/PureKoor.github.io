import LazyImage from '../LazyImage.js'

function Main_CoverImage() {
  return <LazyImage
  src="assets/Somna/Logo_PureKoorSomna.webp"
  placeholder="assets/Somna/Logo_PureKoorSomnaLQ.webp"
  fetchpriority="high"
  alt="Nice image"
  className="max-w-7xl h-full"
/>
}

export default Main_CoverImage;
