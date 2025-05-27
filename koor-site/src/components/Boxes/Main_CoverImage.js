import LazyImage from '../LazyImage.js'

function Main_CoverImage() {
  return <LazyImage
  src="assets/IMG_0604_HQ.PNG"
  placeholder="assets/IMG_0604_LQ.PNG"
  alt="Nice image"
  className="w-screen"
/>
}

export default Main_CoverImage;
