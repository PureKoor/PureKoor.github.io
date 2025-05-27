import KoorMetaTags from "./components/KoorMetaTags";
import Main_CoverImage from "./components/Boxes/Main_CoverImage";
import Main_NavBar from "./components/Boxes/Main_NavBar";
import Main_SomnaDeal from "./components/Boxes/Main_SomnaDeal";
import Main_TFYourSona from "./components/Boxes/Main_TFYourSona";
import Main_Youtube from "./components/Boxes/Main_Youtube";
import Main_Tanuki from "./components/Boxes/Main_Tanuki";
import Main_Artwork from "./components/Boxes/Main_Artwork";
import Main_FootBar from "./components/Boxes/Main_FootBar";
import Main_Patreon from "./components/Boxes/Main_Patreon";
import Main_Tiktok from "./components/Boxes/Main_Tiktok";

{
  /* Main Index HTML - Site Should Be Formed From Box List To Easily Exchange/Update Website In The Futrue */
}
export default function App() {
  return (
    <>
      <KoorMetaTags
        title="PureKoor"
        description="Pure Tycoon creating artwork, videos, and more!"
        image="https://purekoor.com/assets/Meta/SocialPreview.png"
        name="furry,art,artwork,freelance,purekoor,streaming,video,creator,digital,3D,Avatar"
        url="https://purekoor.com"
        author="PureKoor"
      />
      <div className="h-fit bg-gradient-to-b from-[#110067] to-[#540051] overflow-hidden">
        <Main_CoverImage />
        <div className="flex flex-col flex-start items-center justify-center mx-auto max-w-screen-xl gap-2">
          <div className="max-w-screen-xl w-full">
            <Main_NavBar />
            <Main_SomnaDeal />
          </div>
          <Main_Youtube />
          <Main_Patreon />
          <Main_TFYourSona />
          <Main_Artwork />
          {/* <Main_Tiktok /> */}
          <Main_Tanuki />
          <Main_FootBar />
        </div>
      </div>
    </>
  );
}
